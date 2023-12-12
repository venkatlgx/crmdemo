'use client';

import DoneIcon from '@mui/icons-material/Done';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import * as Yup from 'yup';

import 'react-phone-input-2/lib/style.css';
const countryList = [
  { value: 'us', label: 'United States' },
  { value: 'gb', label: 'United Kingdom' },
  // Add more countries as needed
];

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  city: Yup.string().required('City is required'),
  empcode: Yup.string(),
  type: Yup.string().required('Type of user is required'),
  owner: Yup.string().required('Brand owner status is required'),

  selectedImage: Yup.string().required('Image is required'),
  vertical: Yup.string().required('Vertical is required'),
  department: Yup.string().required('Department is required'),
  designation: Yup.string().required('Designation is required'),
  expertise: Yup.string().required('Expertise is required'),
  // Add other fields and their validations as needed
});

export default function UserForm({ onsave }) {
  const handleSubmit = (values) => {
    // Perform actions on form submission, e.g., save data
    onsave();
  };
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      empcode: '',
      phone: '',
      owner: null,
      type: null,
      city: null,
      selectedImage: null,
      vertical: null,
      department: null,
      designation: null,
      expertise: null,
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <formik>
      <div
        style={{
          padding: 15,
          width: '80%',
          height: '100%',
          overflow: 'scroll',
        }}
      >
        <p
          style={{
            fontSize: 14,
          
            color: 'rgba(255, 255, 255, 0.6)',
            marginTop: '10px',
            fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
          }}
        >
          User Role
        </p>
        <div style={{ display: 'flex' }}>
          <button
            onClick={() =>
              formik.setValues({
                ...formik.values,
                type: 'user',
              })
            }
            style={{
              borderWidth: 1,
              height: 40,
              width: 255,
              backgroundColor:
                formik.values.type == 'user' ? 'rgba(0, 148, 255, 0.1)' : null,
              borderRadius: 8,
              borderColor:
                formik.values.type == 'user'
                  ? 'rgba(0, 148, 255, 1)'
                  : 'rgba(180, 180, 180, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <DoneIcon
              style={{
                color: 'black',
                fontSize: 15,
                padding: 2,
                backgroundColor: 'white',
                borderRadius: 30,
                opacity: formik.values.type == 'user' ? 1 : 0,
              }}
            ></DoneIcon>
            <p
              style={{
                color: 'white',
                fontSize: 14,
          
                textTransform: 'capitalize',
                marginLeft: formik.values.type == 'user' ? '10px' : null,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              User
            </p>
          </button>
          <button
            onClick={() =>
              formik.setValues({
                ...formik.values,
                type: 'admin',
              })
            }
            style={{
              borderWidth: 1,
              height: 40,
              width: 255,
              borderColor:
                formik.values.type == 'admin'
                  ? 'rgba(0, 148, 255, 1)'
                  : 'rgba(180, 180, 180, 1)',
              borderRadius: 8,
              marginLeft: '20px',
              backgroundColor:
                formik.values.type == 'admin' ? 'rgba(0, 148, 255, 0.1)' : null,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <DoneIcon
              style={{
                color: 'black',
                fontSize: 15,
                padding: 2,
                backgroundColor: 'white',
                borderRadius: 30,
                opacity: formik.values.type == 'admin' ? 1 : 0,
              }}
            ></DoneIcon>
            <p
              style={{
                color: 'white',
                fontSize: 14,
              
                textTransform: 'capitalize',
                marginLeft: formik.values.type == 'admin' ? '10px' : null,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Admin
            </p>
          </button>
        </div>
        {formik.errors.type && formik.touched.type && (
          <p style={{ color: 'red', fontSize: 10,       fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'}}>
            {formik.errors.type}
          </p>
        )}
        <hr
          style={{
            borderTop: '1px dashed white',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        ></hr>
        <div style={{ display: 'flex', height: 100 }}>
          <div style={{ width: 100, height: 70 }}>
            <p
              style={{
                fontSize: 14,
             
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Profile Picture
            </p>
            <label
              htmlFor='imageInput'
              style={{
                width: '40px',
                height: '40px',
                border: '2px dotted rgba(180, 180, 180, 1)',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                marginLeft: '25%',
              }}
            >
              <input
                type='file'
                id='imageInput'
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    selectedImage: e.target.files[0],
                  });
                }}
                // onChange={(e)=>{e.target.files[0]? setSelectedImage(e.target.files[0]):null}}

                accept='image/*'
                style={{
                  opacity: 0,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer',
                }}
              />
              {formik.values.selectedImage ? (
                <img
                  src={URL.createObjectURL(formik.values.selectedImage)}
                  alt='Selected'
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    borderRadius: '100%',
                  }}
                />
              ) : (
                <span
                  style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 1)' }}
                >
                  +
                </span>
              )}
            </label>
            {formik.errors.selectedImage && formik.touched.selectedImage && (
              <p style={{ color: 'red', fontSize: 10,       fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'}}>
                {formik.errors.selectedImage}
              </p>
            )}
          </div>
          <div style={{ marginLeft: '3%' }}>
            <p
              style={{
                fontSize: 14,

                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Full Name
            </p>
            <input
              type='text'
              // value={fullname}
              value={formik.values.fullname}
              onChange={(e) => {
                formik.setValues({
                  ...formik.values,
                  fullname: e.target.value,
                });
              }}
              // onChange={(e)=>setFullname(e.target.value)}
              placeholder='Enter Fullname'
              id='fname'
              style={{
                width: 400,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: 'white',
                fontSize: 14,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
              name='fname'
            ></input>
            {formik.errors.fullname && formik.touched.fullname && (
              <p style={{ color: 'red', fontSize: 10,       fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'}}>
                {formik.errors.fullname}
              </p>
            )}
          </div>
          <div style={{ marginLeft: '3%' }}>
            <p
              style={{
                fontSize: 14,

                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Official Email
            </p>
            <input
              placeholder='Enter Email'
              //  value={email} onChange={(e)=>setEmail(e.target.value)}
              value={formik.values.email}
              onChange={(e) => {
                formik.setValues({
                  ...formik.values,
                  email: e.target.value,
                });
              }}
              type='text'
              id='email'
              style={{
                width: 520,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: 'white',
                fontSize: 14,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
              name='email'
            ></input>
            {formik.errors.email && formik.touched.email && (
              <p style={{ color: 'red', fontSize: 10, fontWeight: '600' }}>
                {formik.errors.email}
              </p>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', height: 100 }}>
          <div>
            <p
              style={{
                fontSize: 14,
         
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Phone Number
            </p>

            <PhoneInput
              country='in'
              enableSearch={true}
              inputStyle={{
                width: 535,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: 'white',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
              // value={phone}
              // onChange={data => setphone(data)}
              value={formik.values.phone}
              onChange={(value) => {
                formik.setValues({
                  ...formik.values,
                  phone: value,
                });
              }}
              buttonStyle={{ backgroundColor: 'rgba(30, 32, 41, 1)' }}
              placeholder='Enter Phone Number'
              countryOptions={countryList}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p style={{ color: 'red', fontSize: 10, fontWeight: '600' }}>
                {formik.errors.phone}
              </p>
            )}
          </div>
          <div style={{ marginLeft: '3%' }}>
            <p
              style={{
                fontSize: 14,
        
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              City
            </p>

            <select
              value={formik.values.city}
              onChange={(e) => {
                formik.setValues({
                  ...formik.values,
                  city: e.target.value,
                });
              }}
              style={{
                width: 520,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: formik.values.city ? 'white' : 'grey',
                fontSize: 14,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
              name='city'
              id='city'
            >
              <option value='' disabled selected>
                Select City
              </option>
              <option value='northmadras'>North Madras</option>
              <option value='southmadras'>South Madras</option>
              <option value='bengaluru'>Bangaluru</option>
              <option value='hyderabad'>Hyderabd</option>
            </select>
            {formik.errors.city && formik.touched.city && (
              <p style={{ color: 'red', fontSize: 10, fontWeight: '600' }}>
                {formik.errors.city}
              </p>
            )}
          </div>
        </div>
        <hr
          style={{
            borderTop: '1px dashed white',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        ></hr>

        <div style={{ display: 'flex', height: 100 }}>
          <div>
            <p
              style={{
                fontSize: 14,
            
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Emp. Code (Optional)
            </p>
            <input
              placeholder='Enter Employee Code'
              //  value={empcode} onChange={(e)=>setEmpcode(e.target.value)}
              value={formik.values.empcode}
              onChange={formik.handleChange}
              type='text'
              id='empcode'
              style={{
                width:  535,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: 'white',
                fontSize: 14,
              }}
              name='empcode'
            ></input>
            {formik.errors.empcode && formik.touched.empcode && (
              <p style={{ color: 'red', fontSize: 10,       fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'}}>
                {formik.errors.empcode}
              </p>
            )}
          </div>

          <div style={{ marginLeft: '3%' }}>
            <p
              style={{
                fontSize: 14,
             
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Brand Owner
            </p>

            <div style={{ display: 'flex' }}>
              <button
                onClick={() =>
                  formik.setValues({
                    ...formik.values,
                    owner: 'yes',
                  })
                }
                style={{
                  borderWidth: 1,
                  height: 40,
                  width: 255,
                  backgroundColor:
                    formik.values.owner == 'yes'
                      ? 'rgba(0, 148, 255, 0.1)'
                      : null,
                  borderRadius: 8,
                  borderColor:
                    formik.values.owner == 'yes'
                      ? 'rgba(0, 148, 255, 1)'
                      : 'rgba(180, 180, 180, 1)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <DoneIcon
                  style={{
                    color: 'black',
                    fontSize: 15,
                    padding: 2,
                    backgroundColor: 'white',
                    borderRadius: 30,
                    opacity: formik.values.owner == 'yes' ? 1 : 0,
                  }}
                ></DoneIcon>
                <p
                  style={{
                    color: 'white',
                    fontSize: 14,
         
                    textTransform: 'capitalize',
                    marginLeft: formik.values.owner == 'yes' ? '10px' : null,
                    fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                  }}
                >
                  Yes
                </p>
              </button>
              <button
                onClick={() =>
                  formik.setValues({
                    ...formik.values,
                    owner: 'no',
                  })
                }
                style={{
                  borderWidth: 1,
                  height: 40,
                  width: 255,
                  borderColor:
                    formik.values.owner == 'no'
                      ? 'rgba(0, 148, 255, 1)'
                      : 'rgba(180, 180, 180, 1)',
                  borderRadius: 8,
                  marginLeft: '20px',
                  backgroundColor:
                    formik.values.owner == 'no'
                      ? 'rgba(0, 148, 255, 0.1)'
                      : null,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <DoneIcon
                  style={{
                    color: 'black',
                    fontSize: 15,
                    padding: 2,
                    backgroundColor: 'white',
                    borderRadius: 30,
                    opacity: formik.values.owner == 'no' ? 1 : 0,
                  }}
                ></DoneIcon>
                <p
                  style={{
                    color: 'white',
                    fontSize: 14,
     
                    textTransform: 'capitalize',
                    marginLeft: formik.values.owner == 'no' ? '10px' : null,
                    fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
                  }}
                >
                  No
                </p>
              </button>
            </div>
            {formik.errors.owner && formik.touched.owner && (
              <p style={{ color: 'red', fontSize: 10,       fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'}}>
                {formik.errors.owner}
              </p>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', height: 100 }}>
          <div>
            <p
              style={{
                fontSize: 14,

                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Vertical
            </p>
            <select
              value={formik.values.vertical}
              onChange={(e) =>
                formik.setValues({
                  ...formik.values,
                  vertical: e.target.value,
                })
              }
              style={{
                width: 535,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: formik.values.vertical ? 'white' : 'grey',
                fontSize: 14,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
              name='vertical'
              id='vertical'
            >
              <option value='' disabled selected>
                Select Vertical
              </option>
              <option value='onground'>Ground Sales</option>
              <option value='ott'>OTT</option>
              <option value='tvads'>Tv Ads</option>
            </select>
            {formik.errors.vertical && formik.touched.vertical && (
              <p style={{ color: 'red', fontSize: 10,       fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'}}>
                {formik.errors.vertical}
              </p>
            )}
          </div>

          <div style={{ marginLeft: '3%' }}>
            <p
              style={{
                fontSize: 14,

                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Department
            </p>
            <select
              value={formik.values.department}
              onChange={(e) =>
                formik.setValues({
                  ...formik.values,
                  department: e.target.value,
                })
              }
              style={{
                width: 535,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: formik.values.department ? 'white' : 'grey',
                fontSize: 14,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
              name='department'
              id='cidepartmentty'
            >
              <option value='' disabled selected>
                Select Department
              </option>
              <option value='sector-1'>Sector-1</option>
              <option value='sector-2'>Sector-2</option>
              <option value='sector-3'>Sector-3</option>
              <option value='sector-4'>Sector-4</option>
            </select>
            {formik.errors.department && formik.touched.department && (
              <p style={{ color: 'red', fontSize: 10, fontWeight: '600' }}>
                {formik.errors.department}
              </p>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', height: 100 }}>
          <div>
            <p
              style={{
                fontSize: 14,
       
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Designation
            </p>
            <select
              value={formik.values.designation}
              onChange={(e) =>
                formik.setValues({
                  ...formik.values,
                  designation: e.target.value,
                })
              }
              style={{
                width: 535,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: formik.values.designation ? 'white' : 'grey',
                fontSize: 14,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
              name='designation'
              id='designation'
            >
              <option value='' disabled selected>
                Select Designation
              </option>
              <option value='lead'>Team Lead</option>
              <option value='manager'>Manager</option>
              <option value='member'>Memeber</option>
            </select>
            {formik.errors.designation && formik.touched.designation && (
              <p style={{ color: 'red', fontSize: 10, fontWeight: '600' }}>
                {formik.errors.designation}
              </p>
            )}
          </div>

          <div style={{ marginLeft: '3%' }}>
            <p
              style={{
                fontSize: 14,
       
                color: 'rgba(255, 255, 255, 0.6)',
                marginTop: '10px',
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
            >
              Expertise
            </p>
            <select
              value={formik.values.expertise}
              onChange={(e) =>
                formik.setValues({
                  ...formik.values,
                  expertise: e.target.value,
                })
              }
              style={{
                width: 535,
                backgroundColor: 'rgba(30, 32, 41, 1)',
                height: 40,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: 'rgba(180, 180, 180, 1)',
                color: formik.values.expertise ? 'white' : 'grey',
                fontSize: 14,
                fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
              }}
              name='expertise'
              id='expertise'
            >
              <option value='' disabled selected>
                Select Expertise
              </option>
              <option value='junior'>Junior</option>
              <option value='associate'>Associate</option>
              <option value='senior'>Senior</option>
              <option value='architect'>Architect</option>
            </select>
            {formik.errors.expertise && formik.touched.expertise && (
              <p style={{ color: 'red', fontSize: 10, fontWeight: '600' }}>
                {formik.errors.expertise}
              </p>
            )}
          </div>
        </div>
        <hr
          style={{
            borderTop: '1px dashed white',
            marginTop: '60px',
            marginBottom: '20px',
          }}
        ></hr>
        <div
          style={{
            display: 'flex',
            marginLeft: '60%',
       width:"200vw"
          }}
        >
          <Button
            onClick={formik.handleSubmit}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              color: 'rgba(56, 56, 56, 1)',
       
              fontSize: 14,
              borderRadius:50,
  
         
              textTransform: 'none',
       
width:"15vw",height:"40px",
paddingLeft:10,paddingRight:1,      fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
            }}
          >
            Save and add another
          </Button>
          <Button
            onClick={formik.handleSubmit}
            style={{
              backgroundColor: 'rgba(0, 148, 255, 1)',
              color: 'rgba(255, 255, 255, 1)',
              borderRadius: 58,
              fontSize: 14,
            
        
              textTransform: 'none',
           
         
              width:"15vw",height:"40px",
              paddingLeft:10,paddingRight:10,marginLeft:"10px",      fontFamily:"Mulish",fontWeight:'bold',fontStyle:'italic'
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </formik>
  );
}

