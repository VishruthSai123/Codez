import {
  BooleanInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const ChallengeOptionEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="text" validate={[required()]} label="Text" />
        <BooleanInput source="correct" label="Correct option" />
        <ReferenceInput source="challenge_id" reference="challenges" />
        <TextInput source="image_src" label="Image URL" />
        <TextInput source="audio_src" label="Audio URL" />
      </SimpleForm>
    </Edit>
  );
};
