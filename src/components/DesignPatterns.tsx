import * as React from 'react';

import {Buffer} from 'buffer';
import { Text, TextVariants } from '@patternfly/react-core';

//import { Wizard } from '@patternfly/react-core';

import { Card, CardTitle, CardBody, CardHeader } from '@patternfly/react-core';

//import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

var md2json = require("md-2-json");

const { Octokit } = require("@octokit/core");
const octokit = new Octokit({ });



/*
const routeChange = (index) => { 
    const history = useHistory();
    const path=`/example`;
    console.log(index.index);
    history.push(path);
  }
*/

const getPatterns = async function(files) {
    const result = files.map( async (file, idx) => {
        const patterns = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'jchraibi',
            repo: 'designpatterns',
            path: file
        })

        var buff =  Buffer.from(patterns.data.content, 'base64');
        let text = buff.toString('ascii');

        return md2json.parse(text);
    });
    return await Promise.all(result);
}

const getFile = async function() {
    const patterns = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'jchraibi',
        repo: 'designpatterns',
        path: 'patterns'
    })

    return patterns.data.map( (pattern, idx) => {
        return pattern.path;
    })
}


let mypatterns = [];

const start = async() => {
    const files = await getFile();
    //console.log(files);
    //const patterns = await getPatterns(files);
    mypatterns = await getPatterns(files);
    //console.log(mypatterns.length);
    console.log(mypatterns)
}

export default function DesignPatterns () {
    return (start(),
    <React.Fragment>
        <Text component={TextVariants.h1}><b>  &nbsp;&nbsp;OpenShift Design Patterns - TLUH </b></Text>
        {mypatterns.map(function(pattern, index) {
            return (
                <React.Fragment>
                    <Card  key={index}>
                        <CardHeader>
                        <img src='https://redhat-gitops-patterns.io/images/logos/multicloud-gitops.png'width='40px'/>
                        <CardTitle>
                        <Link
                            to={{
                            pathname: "/detailedview",
                            state: {
                                mypattern: mypatterns[index]
                            },
                        }}
                        >{pattern.Title.raw}
                        </Link>
                        </CardTitle>
                        </CardHeader>
                    <CardBody>{pattern.Overview.raw}</CardBody>
                </Card>
                <br/>
              </React.Fragment>
            )
        })}
    </React.Fragment>

    )
}

