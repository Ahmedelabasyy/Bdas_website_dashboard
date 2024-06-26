import { useState } from "react";
import { Col, Container, Row, Spinner, Stack } from "react-bootstrap";
import { EasyAccess, InfoCard } from "../../components";
import { useTranslation } from "react-i18next";
import { routes } from "../../constants";
import Input from "../../components/Ui/Input/Input";
import NewImage from "../../components/Ui/ImageInput/ImageInput";
import { useFormik } from "formik";

const AddNewProject = () => {
  const [loading] = useState(false);
  const { t } = useTranslation();
  const breadcrumbItems = [
    { text: t("breadcrumbs.projects"), link: routes.PROJECTS },
    { text: t("breadcrumbs.addProject") },
  ];

  const formik = useFormik({
    initialValues: {
      image: "",
    },
    enableReinitialize: true,
    // validationSchema: loginValidationSchema(t),
    onSubmit: async () => {},
  });
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
              <h1 className="fw-bold"> Project Title </h1>
            </div>
            <Stack
              direction="vertical"
              className="w-100 bg-white p-3 rounded-2 my-3"
            >
              <Row className="justify-content-between">
                <Col xs={12} md={6}>
                  <InfoCard
                    heading="Project Title"
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

                <Col xs={12}>
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
                <Col xs={12}>
                  <InfoCard
                    heading="Photo"
                    info={<NewImage formik={formik} name="image" />}
                  />
                </Col>
              </Row>
            </Stack>

            <Stack
              direction="vertical"
              className="w-100 bg-white p-3 rounded-2 my-3"
            >
              <Row className="justify-content-between">
                <h6>Key Features</h6>
                <Col xs={12} md={6}>
                  <Stack direction="vertical">
                    <Stack direction="vertical" gap={1}>
                      <Stack direction="vertical">
                        <label style={{ fontSize: "13px" }}>Feature Name</label>
                        <Input name="name" type="string" />
                      </Stack>
                      <Stack
                        direction="vertical"
                        gap={1}
                        className="align-items-start"
                      >
                        <label style={{ fontSize: "13px" }}>Feature Icon</label>
                        <NewImage formik={formik} name="image" />
                      </Stack>
                    </Stack>
                    <Stack direction="vertical">
                      <label style={{ fontSize: "13px" }}>
                        Features Description
                      </label>
                      <Input name="desc" type="string" />
                    </Stack>
                    <Stack
                      direction="vertical"
                      gap={1}
                      className="align-items-start"
                    >
                      <label style={{ fontSize: "13px" }}>Feature Icon</label>
                      <NewImage formik={formik} name="image" />
                    </Stack>
                  </Stack>
                </Col>
                <Col xs={12} md={6}>
                  <Stack direction="vertical">
                    <Stack direction="vertical" gap={1}>
                      <Stack direction="vertical">
                        <label style={{ fontSize: "13px" }}>Feature Name</label>
                        <Input name="name" type="string" />
                      </Stack>
                      <Stack
                        direction="vertical"
                        gap={1}
                        className="align-items-start"
                      >
                        <label style={{ fontSize: "13px" }}>Feature Icon</label>
                        <NewImage formik={formik} name="image" />
                      </Stack>
                    </Stack>
                    <Stack direction="vertical">
                      <label style={{ fontSize: "13px" }}>
                        Features Description
                      </label>
                      <Input name="desc" type="string" />
                    </Stack>
                    <Stack
                      direction="vertical"
                      gap={1}
                      className="align-items-start"
                    >
                      <label style={{ fontSize: "13px" }}>Feature Icon</label>
                      <NewImage formik={formik} name="image" />
                    </Stack>
                  </Stack>
                </Col>
                <Col xs={12} md={6}>
                  <Stack direction="vertical">
                    <Stack direction="vertical" gap={1}>
                      <Stack direction="vertical">
                        <label style={{ fontSize: "13px" }}>Feature Name</label>
                        <Input name="name" type="string" />
                      </Stack>
                      <Stack
                        direction="vertical"
                        gap={1}
                        className="align-items-start"
                      >
                        <label style={{ fontSize: "13px" }}>Feature Icon</label>
                        <NewImage formik={formik} name="image" />
                      </Stack>
                    </Stack>
                    <Stack direction="vertical">
                      <label style={{ fontSize: "13px" }}>
                        Features Description
                      </label>
                      <Input name="desc" type="string" />
                    </Stack>
                    <Stack
                      direction="vertical"
                      gap={1}
                      className="align-items-start"
                    >
                      <label style={{ fontSize: "13px" }}>Feature Icon</label>
                      <NewImage formik={formik} name="image" />
                    </Stack>
                  </Stack>
                </Col>

                <Col xs={12} md={6}>
                  <Stack direction="vertical">
                    <Stack direction="vertical" gap={1}>
                      <Stack direction="vertical">
                        <label style={{ fontSize: "13px" }}>Feature Name</label>
                        <Input name="name" type="string" />
                      </Stack>
                      <Stack
                        direction="vertical"
                        gap={1}
                        className="align-items-start"
                      >
                        <label style={{ fontSize: "13px" }}>Feature Icon</label>
                        <NewImage formik={formik} name="image" />
                      </Stack>
                    </Stack>
                    <Stack direction="vertical">
                      <label style={{ fontSize: "13px" }}>
                        Features Description
                      </label>
                      <Input name="desc" type="string" />
                    </Stack>
                    <Stack
                      direction="vertical"
                      gap={1}
                      className="align-items-start"
                    >
                      <label style={{ fontSize: "13px" }}>Feature Icon</label>
                      <NewImage formik={formik} name="image" />
                    </Stack>
                  </Stack>
                </Col>
                <Col xs={12} md={6}>
                  <Stack direction="vertical">
                    <Stack direction="vertical" gap={1}>
                      <Stack direction="vertical">
                        <label style={{ fontSize: "13px" }}>Feature Name</label>
                        <Input name="name" type="string" />
                      </Stack>
                      <Stack
                        direction="vertical"
                        gap={1}
                        className="align-items-start"
                      >
                        <label style={{ fontSize: "13px" }}>Feature Icon</label>
                        <NewImage formik={formik} name="image" />
                      </Stack>
                    </Stack>
                    <Stack direction="vertical">
                      <label style={{ fontSize: "13px" }}>
                        Features Description
                      </label>
                      <Input name="desc" type="string" />
                    </Stack>
                    <Stack
                      direction="vertical"
                      gap={1}
                      className="align-items-start"
                    >
                      <label style={{ fontSize: "13px" }}>Feature Icon</label>
                      <NewImage formik={formik} name="image" />
                    </Stack>
                  </Stack>
                </Col>
                <Col xs={12} md={6}>
                  <Stack direction="vertical">
                    <Stack direction="vertical" gap={1}>
                      <Stack direction="vertical">
                        <label style={{ fontSize: "13px" }}>Feature Name</label>
                        <Input name="name" type="string" />
                      </Stack>
                      <Stack
                        direction="vertical"
                        gap={1}
                        className="align-items-start"
                      >
                        <label style={{ fontSize: "13px" }}>Feature Icon</label>
                        <NewImage formik={formik} name="image" />
                      </Stack>
                    </Stack>
                    <Stack direction="vertical">
                      <label style={{ fontSize: "13px" }}>
                        Features Description
                      </label>
                      <Input name="desc" type="string" />
                    </Stack>
                    <Stack
                      direction="vertical"
                      gap={1}
                      className="align-items-start"
                    >
                      <label style={{ fontSize: "13px" }}>Feature Icon</label>
                      <NewImage formik={formik} name="image" />
                    </Stack>
                  </Stack>
                </Col>
              </Row>
            </Stack>
          </>
        )}
      </Container>
    </div>
  );
};

export default AddNewProject;
