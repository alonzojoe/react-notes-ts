import { Card, Stack, Badge } from "react-bootstrap";
import classes from "./NoteList.module.css";

export function NoteCard() {
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
