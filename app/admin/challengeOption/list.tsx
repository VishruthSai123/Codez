import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export const ChallengeOptionsList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="text" />
        <BooleanField source="correct" />
        <ReferenceField source="challenge_id" reference="challenges" />
        <TextField source="image_src" />
        <TextField source="audio_src" />
      </Datagrid>
    </List>
  );
};
