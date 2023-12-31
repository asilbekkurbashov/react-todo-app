import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  DatePickerProps,
  message,
} from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { useTranslation } from "react-i18next";
import {
  useAddTaskMutation,
  useEditTaskMutation,
} from "../../state/tasks/task.api";
import { SharedSliceActions } from "../../state/shared/sharedSlice";
import { TaskActions } from "../../state/tasks/task.slice";
import dayjs from "dayjs";
import { dateFormat } from "../../shared/data/data";
import { T_TaskItem } from "../../state/tasks/task.type";
import {UiTextarea,UiCheckbox, UiInput,UiDatePicker ,UiSelect} from '../../shared/ui'

function ModalComponent() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isModal } = useAppSelector((state) => state.SharedSliceReducer);
  const { task } = useAppSelector((state) => state.TaskReducer);
  const [dateValue, setDateValue] = useState("");
  const [form] = Form.useForm();

  const [addTask, { isSuccess: addSuccess, isError: addError }] =
    useAddTaskMutation();

  const [editTask, { isSuccess: editSuccess, isError: editError }] =
    useEditTaskMutation();

  const handleCancel = () => {
    dispatch(SharedSliceActions.setIsModal(false));
    dispatch(TaskActions.setTask(null));
    form.resetFields();
  };

  const onChange: DatePickerProps["onChange"] = (_, dateString) => {
    setDateValue(dateString);
  };

  const onFinish = async (value: T_TaskItem) => {
    if (task) {
      await editTask({ ...value, date: dateValue, id: task.id });
    } else {
      await addTask({ ...value, date: dateValue });
    }
    handleCancel();
  };

  useEffect(() => {
    if (addSuccess) return message.success(t("successAdd"));
    if (editSuccess) return message.success(t("successEdit"));
    if (addError || editError) return message.error(t("errorTask"));
  }, [addSuccess, editSuccess, addError, editError]);

  useEffect(() => {
    if (task) {
      form.setFieldsValue({
        ...task,
        date: dayjs(task.date, dateFormat),
      });
    }
  }, [form, task]);

  return (
    <Modal
      title={task ? t("Edit task") : t("Add a task")}
      open={isModal}
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
          <UiInput placeholder={t("title placeholder")} className="inputName" />
        </Form.Item>
        <Form.Item
          name="date"
          label={t("Date")}
          rules={[{ required: true, message: t("Please") + " " + t("Date") }]}
        >
          <UiDatePicker
            placeholder={t("date placeholder")}
            className="datePicker"
            format={dateFormat}
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
          <UiTextarea
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
          <UiSelect
            placeholder={t("directory placeholder")}
            options={[
              { value: "main", label: "main" },
              { value: "music", label: "music" },
            ]}
          />
        </Form.Item>
        <Form.Item
          style={{ height: "20px" }}
          name="important"
          valuePropName="checked"
        >
          <UiCheckbox>{t("Mark as important")}</UiCheckbox>
        </Form.Item>
        <Form.Item
          style={{ height: "20px" }}
          name="completed"
          valuePropName="checked"
        >
          <UiCheckbox>{t("Mark as completed")}</UiCheckbox>
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
