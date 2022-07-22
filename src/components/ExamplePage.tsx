import * as React from 'react';
import Helmet from 'react-helmet';

import {
  Page,
  PageSection,
  Title,
  DataList,
  DataListItem,
  DataListItemRow,
  DataListItemCells,
  DataListCell,
  TextInput,
  TextContent,
  Text,
  TextVariants,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  CardHeader
} from '@patternfly/react-core';

import axios from 'axios';
import { useState } from 'react';

const argologo = require('../img/argo-logo.png');
const logo = require('../img/github-logo-32px.png');

let issuesList = [];
let issues = [];

let argoapps =
  {
    "metadata": {
      "resourceVersion": "262321817"
    },
    "items": [
      {
        "metadata": {
          "name": "dev-spring-petclinic",
          "namespace": "openshift-gitops",
          "uid": "ce25310f-faf1-4ba8-baa8-6b8e1e4d841c",
          "resourceVersion": "262317268",
          "generation": 7555,
          "creationTimestamp": "2022-03-15T01:03:46Z",
          "managedFields": [
            {
              "manager": "OpenAPI-Generator",
              "operation": "Update",
              "apiVersion": "argoproj.io/v1alpha1",
              "time": "2022-03-15T01:03:46Z",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:spec": {
                  ".": {},
                  "f:destination": {
                    ".": {},
                    "f:namespace": {},
                    "f:server": {}
                  },
                  "f:project": {},
                  "f:source": {
                    ".": {},
                    "f:path": {},
                    "f:repoURL": {},
                    "f:targetRevision": {}
                  },
                  "f:syncPolicy": {
                    ".": {},
                    "f:automated": {}
                  }
                }
              }
            },
            {
              "manager": "argocd-application-controller",
              "operation": "Update",
              "apiVersion": "argoproj.io/v1alpha1",
              "time": "2022-04-01T07:26:01Z",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:status": {
                  ".": {},
                  "f:health": {
                    ".": {},
                    "f:status": {}
                  },
                  "f:history": {},
                  "f:operationState": {
                    ".": {},
                    "f:finishedAt": {},
                    "f:message": {},
                    "f:operation": {
                      ".": {},
                      "f:initiatedBy": {
                        ".": {},
                        "f:username": {}
                      },
                      "f:retry": {},
                      "f:sync": {
                        ".": {},
                        "f:revision": {},
                        "f:syncStrategy": {
                          ".": {},
                          "f:hook": {}
                        }
                      }
                    },
                    "f:phase": {},
                    "f:startedAt": {},
                    "f:syncResult": {
                      ".": {},
                      "f:resources": {},
                      "f:revision": {},
                      "f:source": {
                        ".": {},
                        "f:path": {},
                        "f:repoURL": {},
                        "f:targetRevision": {}
                      }
                    }
                  },
                  "f:reconciledAt": {},
                  "f:resources": {},
                  "f:sourceType": {},
                  "f:summary": {
                    ".": {},
                    "f:images": {}
                  },
                  "f:sync": {
                    ".": {},
                    "f:comparedTo": {
                      ".": {},
                      "f:destination": {
                        ".": {},
                        "f:namespace": {},
                        "f:server": {}
                      },
                      "f:source": {
                        ".": {},
                        "f:path": {},
                        "f:repoURL": {},
                        "f:targetRevision": {}
                      }
                    },
                    "f:revision": {},
                    "f:status": {}
                  }
                }
              }
            }
          ]
        },
        "spec": {
          "source": {
            "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
            "path": "environments/dev",
            "targetRevision": "HEAD"
          },
          "destination": {
            "server": "https://kubernetes.default.svc",
            "namespace": "devsecops-dev"
          },
          "project": "spring-petclinic",
          "syncPolicy": {
            "automated": {}
          }
        },
        "status": {
          "resources": [
            {
              "version": "v1",
              "kind": "Service",
              "namespace": "devsecops-dev",
              "name": "spring-petclinic",
              "status": "Synced",
              "health": {
                "status": "Healthy"
              }
            },
            {
              "group": "apps",
              "version": "v1",
              "kind": "Deployment",
              "namespace": "devsecops-dev",
              "name": "spring-petclinic",
              "status": "Synced",
              "health": {
                "status": "Healthy"
              }
            },
            {
              "group": "route.openshift.io",
              "version": "v1",
              "kind": "Route",
              "namespace": "devsecops-dev",
              "name": "spring-petclinic",
              "status": "Synced",
              "health": {
                "status": "Healthy",
                "message": "Route is healthy"
              }
            }
          ],
          "sync": {
            "status": "Synced",
            "comparedTo": {
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              },
              "destination": {
                "server": "https://kubernetes.default.svc",
                "namespace": "devsecops-dev"
              }
            },
            "revision": "dddfff3b28ce7b6778667640ba49ba186df4b1da"
          },
          "health": {
            "status": "Healthy"
          },
          "history": [
            {
              "revision": "c3867bb8571dc05eac7d73a262bb0c27979af3b6",
              "deployedAt": "2022-03-15T01:29:48Z",
              "id": 0,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-15T01:28:42Z"
            },
            {
              "revision": "ce34eb76aa7e383e0cfaf928f31555ec76d17f88",
              "deployedAt": "2022-03-15T03:29:43Z",
              "id": 1,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-15T03:28:33Z"
            },
            {
              "revision": "096758e55d5180d83507de1ad1aea052078e03e8",
              "deployedAt": "2022-03-17T15:23:02Z",
              "id": 2,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-17T15:21:51Z"
            },
            {
              "revision": "0193cdefa05f8df2e13b796f95dbb14b72cafe14",
              "deployedAt": "2022-03-17T17:03:56Z",
              "id": 3,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-17T17:02:45Z"
            },
            {
              "revision": "1a3bfd2f892a2570c82ffab559b9df77f39d9562",
              "deployedAt": "2022-03-18T16:54:53Z",
              "id": 4,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-18T16:53:41Z"
            },
            {
              "revision": "dddfff3b28ce7b6778667640ba49ba186df4b1da",
              "deployedAt": "2022-03-30T21:41:55Z",
              "id": 5,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-30T21:40:44Z"
            },
            {
              "revision": "dddfff3b28ce7b6778667640ba49ba186df4b1da",
              "deployedAt": "2022-03-30T22:23:16Z",
              "id": 6,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-30T22:22:05Z"
            }
          ],
          "reconciledAt": "2022-04-06T11:11:04Z",
          "operationState": {
            "operation": {
              "sync": {
                "revision": "dddfff3b28ce7b6778667640ba49ba186df4b1da",
                "syncStrategy": {
                  "hook": {}
                }
              },
              "initiatedBy": {
                "username": "admin"
              },
              "retry": {}
            },
            "phase": "Succeeded",
            "message": "successfully synced (all tasks run)",
            "syncResult": {
              "resources": [
                {
                  "group": "apps",
                  "version": "v1",
                  "kind": "Deployment",
                  "namespace": "sandbox",
                  "name": "spring-petclinic",
                  "status": "PruneSkipped",
                  "message": "ignored (requires pruning)",
                  "hookPhase": "Succeeded",
                  "syncPhase": "Sync"
                },
                {
                  "group": "",
                  "version": "v1",
                  "kind": "Service",
                  "namespace": "devsecops-dev",
                  "name": "spring-petclinic",
                  "status": "Synced",
                  "message": "service/spring-petclinic unchanged",
                  "hookPhase": "Running",
                  "syncPhase": "Sync"
                },
                {
                  "group": "apps",
                  "version": "v1",
                  "kind": "Deployment",
                  "namespace": "devsecops-dev",
                  "name": "spring-petclinic",
                  "status": "Synced",
                  "message": "deployment.apps/spring-petclinic unchanged",
                  "hookPhase": "Running",
                  "syncPhase": "Sync"
                },
                {
                  "group": "route.openshift.io",
                  "version": "v1",
                  "kind": "Route",
                  "namespace": "devsecops-dev",
                  "name": "spring-petclinic",
                  "status": "Synced",
                  "message": "route.route.openshift.io/spring-petclinic unchanged",
                  "hookPhase": "Running",
                  "syncPhase": "Sync"
                }
              ],
              "revision": "dddfff3b28ce7b6778667640ba49ba186df4b1da",
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/dev",
                "targetRevision": "HEAD"
              }
            },
            "startedAt": "2022-03-30T22:22:05Z",
            "finishedAt": "2022-03-30T22:23:16Z"
          },
          "sourceType": "Kustomize",
          "summary": {
            "images": [
              "quay-quay-openshift-storage.apps.ocp1.openshift.fr/openshift_cicd/spring-petclinic@sha256:624da9315869bc978810c235b60cf8c2a6708c3230e3cc8ceaae047a49a4fbe2"
            ]
          }
        }
      },
      {
        "metadata": {
          "name": "stage-spring-petclinic",
          "namespace": "openshift-gitops",
          "uid": "3dae539f-bd92-4d05-8d5b-efdf4a208bb2",
          "resourceVersion": "262317269",
          "generation": 7489,
          "creationTimestamp": "2022-03-15T01:03:47Z",
          "managedFields": [
            {
              "manager": "OpenAPI-Generator",
              "operation": "Update",
              "apiVersion": "argoproj.io/v1alpha1",
              "time": "2022-03-15T01:03:47Z",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:spec": {
                  ".": {},
                  "f:destination": {
                    ".": {},
                    "f:namespace": {}
                  },
                  "f:project": {},
                  "f:source": {
                    ".": {},
                    "f:path": {},
                    "f:repoURL": {},
                    "f:targetRevision": {}
                  },
                  "f:syncPolicy": {
                    ".": {},
                    "f:automated": {}
                  }
                }
              }
            },
            {
              "manager": "argocd-server",
              "operation": "Update",
              "apiVersion": "argoproj.io/v1alpha1",
              "time": "2022-03-17T13:40:35Z",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:spec": {
                  "f:destination": {
                    "f:server": {}
                  }
                }
              }
            },
            {
              "manager": "argocd-application-controller",
              "operation": "Update",
              "apiVersion": "argoproj.io/v1alpha1",
              "time": "2022-04-01T07:26:01Z",
              "fieldsType": "FieldsV1",
              "fieldsV1": {
                "f:status": {
                  ".": {},
                  "f:health": {
                    ".": {},
                    "f:status": {}
                  },
                  "f:history": {},
                  "f:operationState": {
                    ".": {},
                    "f:finishedAt": {},
                    "f:message": {},
                    "f:operation": {
                      ".": {},
                      "f:initiatedBy": {
                        ".": {},
                        "f:automated": {}
                      },
                      "f:retry": {
                        ".": {},
                        "f:limit": {}
                      },
                      "f:sync": {
                        ".": {},
                        "f:revision": {}
                      }
                    },
                    "f:phase": {},
                    "f:retryCount": {},
                    "f:startedAt": {},
                    "f:syncResult": {
                      ".": {},
                      "f:resources": {},
                      "f:revision": {},
                      "f:source": {
                        ".": {},
                        "f:path": {},
                        "f:repoURL": {},
                        "f:targetRevision": {}
                      }
                    }
                  },
                  "f:reconciledAt": {},
                  "f:resources": {},
                  "f:sourceType": {},
                  "f:summary": {
                    ".": {},
                    "f:images": {}
                  },
                  "f:sync": {
                    ".": {},
                    "f:comparedTo": {
                      ".": {},
                      "f:destination": {
                        ".": {},
                        "f:namespace": {},
                        "f:server": {}
                      },
                      "f:source": {
                        ".": {},
                        "f:path": {},
                        "f:repoURL": {},
                        "f:targetRevision": {}
                      }
                    },
                    "f:revision": {},
                    "f:status": {}
                  }
                }
              }
            }
          ]
        },
        "spec": {
          "source": {
            "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
            "path": "environments/stage",
            "targetRevision": "HEAD"
          },
          "destination": {
            "server": "https://api.ocp2.openshift.fr:6443",
            "namespace": "devsecops-qa"
          },
          "project": "spring-petclinic",
          "syncPolicy": {
            "automated": {}
          }
        },
        "status": {
          "resources": [
            {
              "version": "v1",
              "kind": "Service",
              "namespace": "devsecops-qa",
              "name": "spring-petclinic",
              "status": "Synced",
              "health": {
                "status": "Healthy"
              }
            },
            {
              "group": "apps",
              "version": "v1",
              "kind": "Deployment",
              "namespace": "devsecops-qa",
              "name": "spring-petclinic",
              "status": "Synced",
              "health": {
                "status": "Healthy"
              }
            },
            {
              "group": "route.openshift.io",
              "version": "v1",
              "kind": "Route",
              "namespace": "devsecops-qa",
              "name": "spring-petclinic",
              "status": "Synced",
              "health": {
                "status": "Healthy",
                "message": "Route is healthy"
              }
            }
          ],
          "sync": {
            "status": "Synced",
            "comparedTo": {
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/stage",
                "targetRevision": "HEAD"
              },
              "destination": {
                "server": "https://api.ocp2.openshift.fr:6443",
                "namespace": "devsecops-qa"
              }
            },
            "revision": "dddfff3b28ce7b6778667640ba49ba186df4b1da"
          },
          "health": {
            "status": "Healthy"
          },
          "history": [
            {
              "revision": "c3867bb8571dc05eac7d73a262bb0c27979af3b6",
              "deployedAt": "2022-03-15T01:29:49Z",
              "id": 0,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/stage",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-15T01:28:42Z"
            },
            {
              "revision": "ce34eb76aa7e383e0cfaf928f31555ec76d17f88",
              "deployedAt": "2022-03-17T13:41:02Z",
              "id": 1,
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/stage",
                "targetRevision": "HEAD"
              },
              "deployStartedAt": "2022-03-17T13:38:32Z"
            }
          ],
          "reconciledAt": "2022-04-06T11:11:04Z",
          "operationState": {
            "operation": {
              "sync": {
                "revision": "ce34eb76aa7e383e0cfaf928f31555ec76d17f88"
              },
              "initiatedBy": {
                "automated": true
              },
              "retry": {
                "limit": 5
              }
            },
            "phase": "Succeeded",
            "message": "successfully synced (all tasks run)",
            "syncResult": {
              "resources": [
                {
                  "group": "",
                  "version": "v1",
                  "kind": "Service",
                  "namespace": "devsecops-qa",
                  "name": "spring-petclinic",
                  "status": "Synced",
                  "message": "service/spring-petclinic created",
                  "hookPhase": "Running",
                  "syncPhase": "Sync"
                },
                {
                  "group": "apps",
                  "version": "v1",
                  "kind": "Deployment",
                  "namespace": "devsecops-qa",
                  "name": "spring-petclinic",
                  "status": "Synced",
                  "message": "deployment.apps/spring-petclinic created",
                  "hookPhase": "Running",
                  "syncPhase": "Sync"
                },
                {
                  "group": "route.openshift.io",
                  "version": "v1",
                  "kind": "Route",
                  "namespace": "devsecops-qa",
                  "name": "spring-petclinic",
                  "status": "Synced",
                  "message": "route.route.openshift.io/spring-petclinic created",
                  "hookPhase": "Running",
                  "syncPhase": "Sync"
                }
              ],
              "revision": "ce34eb76aa7e383e0cfaf928f31555ec76d17f88",
              "source": {
                "repoURL": "http://gogs-cicd.apps.ocp1.openshift.fr/gogs/spring-petclinic-config",
                "path": "environments/stage",
                "targetRevision": "HEAD"
              }
            },
            "startedAt": "2022-03-17T13:38:32Z",
            "finishedAt": "2022-03-17T13:41:02Z",
            "retryCount": 3
          },
          "sourceType": "Kustomize",
          "summary": {
            "images": [
              "quay.io/siamaksade/spring-petclinic:latest"
            ]
          }
        }
      }
    ]
  };

function ArgoApps() {
  return (
    <React.Fragment>
      <br/>
      <Text component={TextVariants.h1}><b>  &nbsp;&nbsp;OpenShift GitOps applications</b></Text>
      { argoapps.items.map(function (app, index) {
        return (
          <React.Fragment>
            <Card key={index} style={{ background: '#d2d2d2', width: '50%'}} isCompact>
            <CardHeader>
              <img src={argologo} width='50px' />
              <CardTitle component="h4"><b>App name: </b> {app.metadata.name}</CardTitle>
            </CardHeader>
              <CardBody ><b>namespace: </b>{app.spec.destination.namespace}
              <p><b>Container images:</b></p>
              {app.status.summary.images.map(function(image, index) {
                return (
                  <React.Fragment>
                    <p> - {image}</p>
                  </React.Fragment>    
                );
              })}
              </CardBody>
              <CardFooter><b>repoURL: </b><a href={app.spec.source.repoURL}>{app.spec.source.repoURL}</a></CardFooter>
          </Card>
          <br/>
          </React.Fragment>
        ) 
      })}
    </React.Fragment>

  );
}


function GithubIssues() {

  let urlStr = "https://api.github.com/repos/openshift/console/issues";
  console.log(" " + urlStr);

  axios.get(urlStr)
  .then(response => {
      issuesList = response.data;
      console.log(issuesList);
      issues = issuesList.map(issue => 
        <DataListItem aria-labelledby="simple-item1">
            <DataListItemRow>
            <DataListItemCells
                dataListCells={[
                <DataListCell key="primary content">
                            <img src={logo} />  
    <span id="simple-item1"><b>{ issue.title}</b></span>
                </DataListCell>,
                <DataListCell key="secondary content">{issue.url}</DataListCell>
                ]}
            />
            </DataListItemRow>
        </DataListItem>
        );
    
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });

  return (
  
  <DataList aria-label="Simple data list example">
    {issues}
  </DataList>
  );
}

export default function ExamplePage() {
  const [repository, setRepository] = useState('');

  return (
    <>
      <ArgoApps/>

      <Helmet>
        <title>Github Issues!</title>
      </Helmet>
      <Page>
      <PageSection variant="light">
          <Title headingLevel="h1">GitHub Issues</Title>
        </PageSection>
        <TextContent>
          <Text component={TextVariants.h2}>Github username</Text>
          <TextInput value='openshift' type="text" aria-label="git username"/>
          </TextContent>
          <TextContent>
          <Text component={TextVariants.h2}>Github repository</Text>
          <TextInput required value={repository} type="text" aria-label="git repository" onChange={(e) => setRepository(e)}/>
          <p>{repository}</p>
          </TextContent>
        
        <GithubIssues/>
      </Page>
    </>
  );
}
