import { useState, useEffect } from "react";
import { v4 } from "uuid";
import {
  Button,
  Modal,
  Form,
  Input,
  Select,
  DatePicker,
  DatePickerProps,
  Checkbox,
  message,
} from "antd";
// editTodo
import { editTodo, I_Todo, setTodos } from "../../state/todosSlice/Todos";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { useAppContext } from "../../hooks/useAppContext";
import { useTranslation } from "react-i18next";
import {TodoActions} from '../../state/todosSlice/Todos'
import dayjs from 'dayjs'

function ModalComponent() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {todos,task,setPending,deletePending} = useAppSelector(state => state.TodoReducer)
  const { isModalOpen, setIsModalOpen } = useAppContext();

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    dispatch(TodoActions.setTask(null))
  };
  const [dateValue, setDateValue] = useState("");
  const [form] = Form.useForm();

  const onChange: DatePickerProps["onChange"] = (_, dateString) => {
    setDateValue(dateString);
  };

  const onFinish = (value:I_Todo) => {
    if(task) {
      dispatch(editTodo({...value, id: task.id, date: dateValue}))
    } else {
      dispatch(setTodos({...value, id:v4() ,date:dateValue}))
    }
    handleCancel()
  };

  useEffect(() => {
    if(setPending) { message.success(t('successAdd'))} 
    if(deletePending) { message.success(t('successDeleted'))}
  }, [setPending,deletePending])

  useEffect(() => {
    if (task) {
      form.setFieldsValue({
        ...task,
        date: dayjs(task.date,'YYYY-MM-DD')
      });
      
    }
  }, [form, task]);


  return (
    <Modal
      title={task ? t("Edit task") : t("Add a task")}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      centered
    >
      <Form
        name="task"
        form={form}
        layout="vertical"
        onFinish={onFinish}
        size="large"
      
      >
        <Form.Item
          name="title"
          label={t("Title")}
          rules={[
            {
              required: true,
              message: t("Please") + " " + t("Title"),
              whitespace: true,
            },
          ]}
        >
          <Input placeholder={t("title placeholder")} className="inputName"/>
        </Form.Item>
        <Form.Item
          name="date"
          label={t("Date")}
          rules={[{ required: true, message: t("Please") + " " + t("Date") }]}
        >
          <DatePicker
            placeholder={t("date placeholder")}
            className="datePicker"
            name="date"
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label={t("Description")}
          rules={[
            {
              required: true,
              message: t("Please") + " " + t("Description"),
              whitespace: true,
            },
          ]}
        >
          <Input.TextArea
            className="textarea"
            placeholder={t("text placeholder")}
          />
        </Form.Item>
        <Form.Item
          name="directory"
          label={t("Directory")}
          rules={[
            { required: true, message: t("Please") + " " + t("Directory") },
          ]}
        >
          <Select
            placeholder={t("directory placeholder")}
            options={[
              { value: "main", label: "main" },
              { value: "music", label: "music" },
            ]}
          />
        </Form.Item>
        <Form.Item style={{height:'20px'}} name="important" valuePropName="checked">
          <Checkbox className="checkbox">{t("Mark as important")}</Checkbox>
        </Form.Item>
        <Form.Item style={{height:'20px'}} name="completed" valuePropName="checked">
          <Checkbox className="checkbox">{t("Mark as completed")}</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button block className="btn" htmlType="submit">
            {task ? t("Edit task") : t("Add a task")}{" "}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalComponent;

