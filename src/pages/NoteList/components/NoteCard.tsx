import { Card, Stack, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./NoteList.module.css";
import { Tag } from "../../../App";

export type NoteCardProps = {
  id: string;
  title: string;
  tags: Tag[];
};

export function NoteCard({ id, title, tags }: NoteCardProps) {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${classes.card}`}
    >
      <Card.Body>
        <Stack
          gap={2}
          className="align-items-center justify-content-center h-100"
        >
          <span className="fs-5">{title}</span>
          <Stack
            gap={1}
            direction="horizontal"
            className="justify-content-center flex-wrap"
          >
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
        </Stack>
      </Card.Body>
    </Card>
  );
}
