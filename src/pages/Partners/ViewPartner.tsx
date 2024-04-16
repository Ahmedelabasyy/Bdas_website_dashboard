import { FC, useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Stack } from "react-bootstrap";
import { EasyAccess, InfoCard } from "../../components";
import { FaUserFriends } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { AdminFormData } from "../../types/types";
import { getOneAdmin } from "../../services";
import { routes } from "../../constants";
import { useTranslation } from "react-i18next";

const ViewPartner: FC = () => {
  const { id } = useParams();
  const { t } = useTranslation();
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

  const breadcrumbItems = [
    { text: t("breadcrumbs.visitBread"), link: routes.PARTNERS },
    { text: t("breadcrumbs.addVisit") },
    // No link for the current page
  ];

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
            <EasyAccess items={breadcrumbItems} />

            <div className="d-flex justify-content-center">
              <h1 className="fw-bold"> Partner Name </h1>
            </div>
            <Stack
              direction="vertical"
              className="w-100 bg-white p-3 rounded-2 my-3"
            >
              <Stack
                direction="horizontal"
                className="align-items-center justify-content-between"
              >
                <h5
                  className="mb-3 fw-bold"
                  style={{ color: "var(--primary)" }}
                >
                  Partner Information
                </h5>
              </Stack>
              <Row className="justify-content-between">
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Partner Name"
                    info={admin?.name}
                    Icon={<FaUserFriends />}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Status"
                    info={
                      <Stack
                        direction="horizontal"
                        className="justidy-content-center align-items-center"
                      >
                        <span>Show on landing page: </span>
                        <input className="ms-2" type="checkbox" />
                      </Stack>
                    }
                    Icon={<FaListCheck />}
                  />
                </Col>
              </Row>
            </Stack>
            <Stack
              direction="vertical"
              className="w-100 bg-white p-3 rounded-2"
            >
              <Stack
                direction="horizontal"
                className="align-items-center justify-content-between"
              >
                <h5
                  className="mb-3 fw-bold"
                  style={{ color: "var(--primary)" }}
                >
                  Partner Image
                </h5>
              </Stack>
              <Row className="justify-content-between">
                <Col xs={12}>
                  <img
                    style={{
                      height: "280px",
                      width: "50%",
                    }}
                    src={
                      "https://api-intercom-test.ventiosolutions.net" +
                      admin?.image
                    }
                    alt="Partner Image"
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

export default ViewPartner;
