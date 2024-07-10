import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000",prepareHeaders: (headers) => {
    // Add CORS headers to allow requests from the frontend server
    headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    return headers;
  },
}),
  endpoints: (builder) => ({

    //Get Users
    // getEmployee: builder.query({
    //   query: () => "/getdata", // Assuming "api" is the endpoint to fetch all employees
    // }),



    
    createUser: builder.mutation({
      query: (userData) => ({
        url: '/create-users',
        method: 'POST',
        body: userData,
      }),
    }),

    
    //   updateEmployee: builder.mutation({
    //     query: ({ id, ...employee }) => {
    //       console.log(employee, 'employee');
    //       const formData = new FormData();
    //       console.log(formData, 'FormData');
    //       // Append employee data
    //       formData.append('id', id); // Assuming id is the correct field name
    //       console.log(employee.updateddata.location, 'Location'); // Check location value
    //       formData.append('location', employee?.updateddata?.location);
    //       console.log(employee.updateddata.title, 'Title'); // Check title value
    //       formData.append('title', employee?.updateddata?.title);
          
    //       // Check if department exists before accessing its properties
    //       if (employee?.updateddata?.department) {
    //         console.log(employee.updateddata.department.name, 'Department Name'); // Check department name value
    //         formData.append('department[name]', employee?.updateddata?.department.name);
    //         console.log(employee.updateddata.department.jobTitle, 'Department Job Title'); // Check department jobTitle value
    //         formData.append('department[jobTitle]', employee?.updateddata?.department.jobTitle);
    //       }
          
    //       // Append image file if needed
    //       if (employee?.updateddata?.image) {
    //         console.log(employee.updateddata.image, 'Image'); // Check image value
    //         formData.append('image', employee?.updateddata?.image);
    //       }
          
    //       console.log(formData, 'FormData with Appended Data'); // Check formData after appending data
          
    //       return {
    //         url: `/updatedata?id=${id}`, // Assuming the same endpoint for both POST and PUT requests
    //         method: 'PUT', // Change method to POST
    //         body: formData,
    //         // headers: {
    //         //   // Include appropriate headers for file uploads
    //         //   'Content-Type': 'multipart/form-data',
    //         // },
    //       };
    //     },
    //     invalidatesTags: ['Employee'],
    //   }),
      
           
      // Delete an employee
    //   deleteEmployee: builder.mutation({
    //     query: (id) => ({
    //       url: `/deleteEmployee?id=${id}`,
    //       method: 'DELETE',
    //     }),
    //     invalidatesTags: ['Employee'],
    //   }),
  }),
});

export const { 
    // useGetEmployeeQuery,
    useCreateUserMutation ,
    // useUpdateEmployeeMutation,
    // useDeleteEmployeeMutation,
 }
     = usersApi;

export default usersApi.reducer;
