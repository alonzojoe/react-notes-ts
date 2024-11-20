import { ChangeEvent, useState } from "react";
import { Row, Col, Stack, Button, Form, Card, Badge } from "react-bootstrap";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import { Tag } from "../../App";
import classes from "./NoteList.module.css";

type NoteListProps = {
  availableTags: Tag[];
};

const NoteList = ({ availableTags }: NoteListProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [title, setTitle] = useState("");

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="primary">Create</Button>
            </Link>
            <Button variant="outline-secondary">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return {
                    label: tag.label,
                    value: tag.id,
                  };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row xs={1} sm={2} lg={3} className="g-3 mt-3">
        <Col>
          <NoteCard />
        </Col>
      </Row>
    </>
  );
};

function NoteCard() {
  return (
    <Card className={`h-100 text-reset text-decoration-none ${classes.card}`}>
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">Card Title</span>
          <Stack
            gap={1}
            direction="horizontal"
            className="justify-content-center flex-wrap"
          >
            <Badge className="text-truncate">Tag 1</Badge>
            <Badge className="text-truncate">Tag 2</Badge>
            <Badge className="text-truncate">Tag 3</Badge>
          </Stack>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default NoteList;
