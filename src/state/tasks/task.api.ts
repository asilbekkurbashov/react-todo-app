import { rtkAPI } from "..";
import { T_TaskItem } from "./task.type";

export const tasksAPI = rtkAPI.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query<T_TaskItem[], string | null>({
            query: (value) => ({
                url: `todos?${value ? `search=${value}` : ''}`,
                method: "GET"
            }),
            providesTags: ['Todos']
        }),
        addTask: builder.mutation<T_TaskItem, T_TaskItem>({
            query: (body) => ({
                url: `todos`,
                method: "POST",
                body,
            }),
            invalidatesTags: ['Todos']
        }),
        editTask: builder.mutation<any, T_TaskItem>({
            query: (body) => ({
                url: `todos/${body.id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Todos']
        }),
        editTaskImportant: builder.mutation<any, T_TaskItem>({
            query: (body) => ({
                url: `todos/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Todos']
        }),
        editTaskCompleted: builder.mutation<any, T_TaskItem>({
            query: (body) => ({
                url: `todos/${body.id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTask: builder.mutation<void, string>({
            query: (id) => ({
                url: `todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todos'],
        })
    })
})

export const { useGetTasksQuery ,useAddTaskMutation,useEditTaskCompletedMutation ,useDeleteTaskMutation, useEditTaskMutation, useEditTaskImportantMutation} = tasksAPI