import React from 'react';
import { Button, Input, Select } from '../../components';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import './style.css';
import { apiProject } from '../../api/apiProject';

const nameCats = [
  { item: 'Cat 1', key: 0 },
  { item: 'Cat 2', key: 3 },
  { item: 'Cat 3', key: 1 },
  { item: 'Cat 4', key: 2 },
];
const nameDogs = [
  { item: 'Dog 1', key: 4 },
  { item: 'Dog 2', key: 5 },
  { item: 'Dog 3', key: 7 },
  { item: 'Dog 4', key: 6 },
];
const selectValues = [
  { item: 1, key: 8 },
  { item: 2, key: 9 },
  { item: 3, key: 12 },
  { item: 4, key: 10 },
  { item: 5, key: 11 },
];

export const CreatePage = () => {
  const { control, handleSubmit, watch } = useForm();
  const watchFields = watch(['radioTextButton', 'radioSelectButton']);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'item',
    keyName: 'itemId',
  });
  const onSubmit = data => {
    apiProject.apiCreateProject(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
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
      <div className="select__wrapper">
        <Controller
          name="catName"
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
          name="dogName"
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
      </div>
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
          name="radioTextButton"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              type="radio"
              placeholder="Enter the notice (optional)"
            />
          )}
        />
        <Controller
          name="textNotRequired"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              placeholder="text"
              onChange={onChange}
              inputRef={ref}
              disabled={watchFields[0] !== 'on' && 'disabled'}
            />
          )}
        />
        <Controller
          name="radioSelectButton"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <>
              <Input
                inputRef={ref}
                onChange={onChange}
                type="radio"
                placeholder="Enter the notice (optional)"
              />
            </>
          )}
        />
        <Controller
          name="selectNotRequired"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Select
              disabled={watchFields[1] !== 'on' && 'disabled'}
              defaultValue="1"
              options={selectValues}
              onChange={onChange}
              inputRef={ref}
            />
          )}
        />
      </div>
      {fields.map((item, index) => (
        <div className="field-array__container">
          <Controller
            name={`item.${index}.name`}
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
          <Button
            onClick={() => {
              remove(index);
            }}
          >
            Delete
          </Button>
        </div>
      ))}
      <Button
        onClick={() => {
          append({ item: fields.length.toString(), name: '' });
        }}
      >
        Add Item
      </Button>
      <Button type="submit">Submit</Button>
    </form>
  );
};
