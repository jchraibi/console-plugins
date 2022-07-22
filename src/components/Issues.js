import react from 'react';

const Issue = props => (
    <DataListItem aria-labelledby="simple-item1">
        <DataListItemRow>
        <DataListItemCells
            dataListCells={[
            <DataListCell key="primary content">
                <span id="simple-item1">{props.name}</span>
            </DataListCell>,
            <DataListCell key="secondary content">{props.title}</DataListCell>
            ]}
        />
        </DataListItemRow>
    </DataListItem>
);