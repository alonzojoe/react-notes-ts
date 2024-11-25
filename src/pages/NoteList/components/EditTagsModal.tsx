import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { Tag } from "../../../App";

type EditTagsProps = {
  availableTags: Tag[];
  show: boolean;
  handleClose: () => void;
  onUpdate: (id: string, label: string) => void;
  onDelete: (id: string) => void;
};

const EditTagsModal = ({
  availableTags,
  show,
  handleClose,
  onUpdate,
  onDelete,
}: EditTagsProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={(e) => onUpdate(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    onClick={() => onDelete(tag.id)}
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTagsModal;
