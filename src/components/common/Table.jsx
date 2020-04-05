import React from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ReactTableWrapper = (props) => {
  const {children} = props;

  const getTrProps = (state, rowInfo) => {
    if (rowInfo) {
      return {
        style: {
          borderBottom: '1px',
          borderBottomColor: '#f5f5f5',
          borderBottomStyle: 'solid',
          textAlign: 'center',
        },
      };
    }
    return {};
  };

  return React.useMemo(() => (
    <Card>
      <CardContent>
        <ReactTable
          className="app-table"
          getTrProps={getTrProps}
          {...props}
        >
          {children}
        </ReactTable>
      </CardContent>
    </Card>
  ), [props.data]);
};

const withoutPagination = (WrappedTable) => (props) => {
  const {data} = props;
  const dataSize = (data && data.length) || 5;
  return <WrappedTable pageSize={dataSize} showPagination={false} {...props} />;
};

const withPagination = (WrappedTable) => (props) => <WrappedTable showPagination manual {...props} />;

const Table = withoutPagination(ReactTableWrapper);
export const PaginatedTable = withPagination(ReactTableWrapper);

export default Table;
