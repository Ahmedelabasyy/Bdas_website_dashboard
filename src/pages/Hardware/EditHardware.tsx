import { useState } from "react";
import { Col, Container, Row, Spinner, Stack } from "react-bootstrap";
import { EasyAccess, InfoCard } from "../../components";
import { useTranslation } from "react-i18next";
import { routes } from "../../constants";

const EditHardware = () => {
  const [loading] = useState(false);
  const { t } = useTranslation();
  const breadcrumbItems = [
    { text: t("breadcrumbs.hardware"), link: routes.HARDWARE },
    { text: t("breadcrumbs.editHardware") },
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
              <h1 className="fw-bold"> Hardware Title </h1>
            </div>
            <Stack
              direction="vertical"
              className="w-100 bg-white p-3 rounded-2 my-3"
            >
              <Row className="justify-content-between">
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Hardware Title"
                    info={
                      <input
                        type="text"
                        className="px-2 py-1 mt-1 rounded-2"
                        style={{ border: "none" }}
                        placeholder="Hardware Title"
                      />
                    }
                  />
                </Col>
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Status"
                    info={
                      <Stack
                        direction="horizontal"
                        className="py-1 mt-1 justidy-content-center align-items-center"
                      >
                        <span>Show on landing page: </span>
                        <input className="ms-2" type="checkbox" />
                      </Stack>
                    }
                  />
                </Col>
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Description"
                    info={
                      <textarea
                        className="px-2 py-1 mt-1 rounded-2 w-75 "
                        style={{ border: "none", height: "100px" }}
                        placeholder="Description"
                      />
                    }
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

export default EditHardware;
