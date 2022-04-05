import React from 'react';
import { Input, Select } from '../../components';
import { useForm, Controller } from 'react-hook-form';

const nameCats = ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4'];
const nameDogs = ['Dog 1', 'Dog 2', 'Dog 3', 'Dog 4'];
const selectValues = [1, 2, 3, 4, 5];

export const CreatePage = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field: { ref, onChange } }) => (
          <Input
            type="text"
            inputRef={ref}
            onChange={onChange}
            placeholder="Enter your name"
          />
        )}
      />
      <Controller
        name="title"
        control={control}
        render={({ field: { ref, onChange } }) => (
          <Input
            type="text"
            inputRef={ref}
            onChange={onChange}
            placeholder="Enter the title"
          />
        )}
      />
      <Controller
        name="subtitle"
        control={control}
        render={({ field: { ref, onChange } }) => (
          <Input
            type="text"
            inputRef={ref}
            onChange={onChange}
            placeholder="Enter the subtitle"
          />
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field: { ref, onChange } }) => (
          <Input
            type="text"
            inputRef={ref}
            onChange={onChange}
            placeholder="Enter the type"
          />
        )}
      />
      <Controller
        name="cat_name"
        control={control}
        render={({ field: { ref, onChange } }) => (
          <Select
            inputRef={ref}
            onChange={onChange}
            defaultValue="Choose a cat name"
            options={nameCats}
          />
        )}
      />
      <Controller
        name="dog_name"
        control={control}
        render={({ field: { ref, onChange } }) => (
          <Select
            inputRef={ref}
            onChange={onChange}
            defaultValue="Choose a dog name"
            options={nameDogs}
          />
        )}
      />
      <Controller
        name="notice"
        control={control}
        render={({ field: { ref, onChange } }) => (
          <Input
            type="text"
            inputRef={ref}
            onChange={onChange}
            placeholder="Enter the notice (optional)"
          />
        )}
      />
      <div>
        <p>Do you need more?</p>
        <Controller
          name="notice_text"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <>
              <Input
                type="radio"
                id="notice_text"
                placeholder="Enter the notice (optional)"
              />
              <label id="notice_text">
                <Input placeholder="text" onChange={onChange} inputRef={ref} />
              </label>
            </>
          )}
        />
        <Controller
          name="notice_select"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <>
              <Input
                type="radio"
                id="notice_select"
                placeholder="Enter the notice (optional)"
              />
              <label id="notice_select">
                <Select
                  defaultValue="1"
                  options={selectValues}
                  onChange={onChange}
                  inputRef={ref}
                />
              </label>
            </>
          )}
        />
      </div>
      <button type="submit" />
    </form>
  );
};
