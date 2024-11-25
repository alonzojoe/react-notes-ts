import { Col, Row, Stack, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNote } from "../../layouts/NoteLayout";
import ReactMarkDown from "react-markdown";

const Note = ({ onDelete }: { onDelete: (id: string) => void }) => {
  const note = useNote();
  const { id, title, tags, markdown } = note;

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{title}</h1>
          <Stack gap={1} direction="horizontal" className="flex-wrap">
            {tags.length > 0 && (
              <>
                {tags.map((tag) => (
                  <Badge className="text-truncate" key={tag.id}>
                    {tag.label}
                  </Badge>
                ))}
              </>
            )}
          </Stack>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="outline-danger" onClick={() => onDelete(id)}>
              Delete
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkDown>{markdown}</ReactMarkDown>
    </>
  );
};

export default Note;
