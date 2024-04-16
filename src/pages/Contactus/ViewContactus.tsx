import { FC, useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Stack } from "react-bootstrap";
import { InfoCard } from "../../components";
import { FaUserFriends } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { AdminFormData } from "../../types/types";
import { getOneAdmin } from "../../services";
import { IoIosMail } from "react-icons/io";

const ViewContactus: FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [admin, setAdmin] = useState<AdminFormData>({
    email: "",
    name: "",
    image: "",
    role: "",
    nationalId: "",

    buildings: [],

    status: 0,
    phoneNumber: "",
  });

  useEffect(() => {
    setLoading(true);
    getOneAdmin({ id: id! }).then((admin) => {
      setAdmin(admin.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="pageStyle">
      <Container fluid>
        {loading ? (
          <div
            style={{ height: "90vh" }}
            className="w-100 d-flex justify-content-center align-items-center"
          >
            <Spinner />
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <h1 className="fw-bold"> Contact Us </h1>
            </div>
            <Stack
              direction="vertical"
              className="w-100 bg-white p-3 rounded-2 my-3"
            >
              <Row className="justify-content-between">
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Name"
                    info={admin?.name}
                    Icon={<FaUserFriends />}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Mail"
                    info={
                      <Stack
                        direction="horizontal"
                        className="justidy-content-center align-items-center"
                      >
                        {admin?.email}
                      </Stack>
                    }
                    Icon={<IoIosMail />}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Number"
                    info={admin?.phoneNumber}
                    Icon={<FaUserFriends />}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Reason"
                    info={
                      <Stack
                        direction="horizontal"
                        className="justidy-content-center align-items-center"
                      >
                        {admin?.nationalId}
                      </Stack>
                    }
                    Icon={<IoIosMail />}
                  />
                </Col>
                <Col xs={12}>
                  <InfoCard
                    heading="Message"
                    info={
                      <Stack
                        direction="horizontal"
                        className="justidy-content-center align-items-center"
                      >
                        {admin?.nationalId}
                      </Stack>
                    }
                    Icon={<IoIosMail />}
                  />
                </Col>
              </Row>
            </Stack>
          </>
        )}
      </Container>
    </div>
  );
};

export default ViewContactus;
