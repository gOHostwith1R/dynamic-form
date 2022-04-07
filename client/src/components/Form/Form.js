import React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { nameCats, nameDogs, selectValues } from '../../constants/constants';
import { Paragraph } from '../Paragraph';

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    type: yup.string().max(6),
    catName: yup.string().required(),
  })
  .required();

const defaultValues = {
  name: '',
  title: '',
  subtitle: '',
  type: '',
  catName: '',
  dogName: '',
  notice: '',
  textNotRequired: '',
  selectNotRequired: '',
  item: [],
};

export const Form = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const watchFields = watch(['radioTextButton', 'radioSelectButton']);
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'item',
    keyName: 'itemId',
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div>
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
        {errors.name && <Paragraph>{errors.name.message}</Paragraph>}
      </div>
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
      <div>
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
        {errors.type && <Paragraph>{errors.type.message}</Paragraph>}
      </div>
      <div className="select__wrapper">
        <div>
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
          {errors.catName && <Paragraph>{errors.catName.message}</Paragraph>}
        </div>
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
