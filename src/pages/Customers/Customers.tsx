import { FC, useEffect, useMemo, useState } from "react";
import { Col, Container, Row, Spinner, Stack } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import {
  ActionsMenu,
  Button,
  SearchInput,
  TableComponent,
} from "../../components";
import { useFetchTableData } from "../../hooks/useFetchTableData";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";

const Customers: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [listiner] = useState(false);
  const navigate = useNavigate();

  // Fetch Table Data
  let url = "getAllAdmins";
  const { data, loading, count, setPageNumber, pageNumber, fetchData } =
    useFetchTableData(searchValue, url, listiner);

  useEffect(() => {
    fetchData();
  }, []);

  // Data and Columns
  const memoizedData = useMemo(() => {
    return data;
  }, [data]);
  const columns = [
    {
      Header: "photo",
      accessor: "photo",
      width: 300,
      Cell: ({ row }: any) => (
        <div className="d-flex" style={{ width: "200px" }}>
          <img
            width={"40px"}
            height={"40px"}
            src={
              "https://api-intercom-test.ventiosolutions.net" +
              row.original.image
            }
            style={{ borderRadius: "10px", margin: "0 5px" }}
            alt="img"
          />
        </div>
      ),
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "status",
      accessor: "status",
      Cell: ({ row }: any) => (
        <div className="w-75">
          <input
            className="m-auto w-25"
            type="checkbox"
            name="status"
            checked={row?.original?.status === 0 ? false : true}
          />
        </div>
      ),
    },
    {
      Header: "",
      accessor: "actions",
      Cell: ({ row }: any) => (
        <ActionsMenu
          onView={() => navigate(`${routes?.CUSTOMERS}/${row?.original?.id}`)}
          onEdit={() =>
            navigate(`${routes?.EDITCUSTOMER}/${row?.original?.id}`)
          }
          onDelete={() => console.log("object")}
        />
      ),
    },
  ];

  return (
    <div className="pageStyle">
      <Container>
        <Stack direction="vertical">
          <Row>
            <Col md={12} lg={10}>
              <SearchInput
                value={searchValue}
                type="text"
                leftIcon={<GoSearch />}
                inputMode="search"
                onChange={(e: any) => setSearchValue(e.target.value)}
                placeholder="Search ..."
              />
            </Col>

            <Col md={12} lg={2}>
              <Button
                // onClick={() => navigate(`${routes.ADDVISIT}`)}
                text="Add New Customer"
                onClick={() => navigate(`${routes?.ADDNEWCUSTOMER}`)}
                type="button"
                style={{
                  height: "49.6px",
                  fontSize: "14px",
                  margin: "1rem 0",
                }}
              />
            </Col>
          </Row>
          <>
            {loading ? (
              <Spinner />
            ) : (
              <TableComponent
                columns={columns}
                data={memoizedData}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                pageCount={Math.ceil(count / 4)}
              />
            )}
          </>
        </Stack>
      </Container>
    </div>
  );
};

export default Customers;
