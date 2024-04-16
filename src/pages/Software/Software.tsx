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

const Software: FC = () => {
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
      Header: "Icon",
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
          onView={() =>
            navigate(`${routes?.EDITSOFTWARE}/${row?.original?.id}`)
          }
          onEdit={() =>
            navigate(`${routes?.EDITSOFTWARE}/${row?.original?.id}`)
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
            <Col sm={12}>
              <SearchInput
                value={searchValue}
                type="text"
                leftIcon={<GoSearch />}
                inputMode="search"
                onChange={(e: any) => setSearchValue(e.target.value)}
                placeholder="Search ..."
              />
            </Col>
          </Row>

          {loading ? (
            <Spinner />
          ) : (
            <>
              <TableComponent
                columns={columns}
                data={memoizedData}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                pageCount={Math.ceil(count / 4)}
              />

              <Stack
                direction="vertical"
                className="w-100 bg-white p-3 rounded-2 my-2"
              >
                <Stack
                  direction="horizontal"
                  className="align-items-center justify-content-between"
                >
                  <h1
                    className="mb-3 fw-bold"
                    style={{ color: "var(--primary)" }}
                  >
                    Hero Section
                  </h1>
                  <Button
                    onClick={() => navigate(`${routes.EDITSOFTWAREHERO}`)}
                    style={{ width: "10rem" }}
                    text="Edit"
                  />
                </Stack>
                <Row className="justify-content-between">
                  <Col xs={12} md={5}>
                    <div>
                      <Stack direction="vertical" gap={2}>
                        <h5>
                          <span className="fw-bold">Title:</span> Bdas Smart
                        </h5>
                        <p>
                          <span className="fw-bold">Description:</span> Lorem
                          ipsum dolor sit amet consectetur adipisicing elit.
                          Optio quaerat possimus vero ad laudantium ducimus
                          blanditiis aliquam placeat consectetur atque, pariatur
                          saepe sapiente voluptatum similique voluptate nemo
                          delectus deleniti nam!
                        </p>
                      </Stack>
                    </div>
                  </Col>
                  <Col xs={12} md={7}>
                    <img
                      style={{
                        height: "280px",
                        width: "100%",
                      }}
                      src={
                        "https://api-intercom-test.ventiosolutions.net/uploads/image-1710064783541.png"
                      }
                      alt="Partner Image"
                    />
                  </Col>
                </Row>
              </Stack>
            </>
          )}
        </Stack>
      </Container>
    </div>
  );
};

export default Software;
