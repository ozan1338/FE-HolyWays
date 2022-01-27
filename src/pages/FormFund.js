import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import "./formfund.css";
import { useDispatch, useSelector } from "react-redux";
import { addFund } from "../action/fundAction";
import AlertError from "../components/AlertError";
import Loading from "../components/Loading";
import AlertSuccess from "../components/AlertSuccess";

export default function FormFund() {
  const fundState = useSelector((state) => state.addFundReducer);

  const { error, loading } = fundState;

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    thumbnail: null,
    goal: "",
    description: "",
    expiredDate: 0
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]:
        event.target.type === "file" ? event.target.files : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!form.thumbnail){
      const Form = {
        title: form.title,
        thumbnail: null
      }
      dispatch(addFund(Form));
    }else{
      const formData = new FormData();
      formData.set("title", form.title);
      formData.set("thumbnail", form.thumbnail[0], form.thumbnail[0].name);
      formData.set("goal", form.goal);
      formData.set("expiredDate", form.expiredDate);
      formData.set("description", form.description);
      //console.log(formData);
      dispatch(addFund(formData));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || FORM</title>
      </Helmet>
      <div>
        <Navbar />
        <div className="container-2">
          <div className="form-fund-page">
          <h1>Make Raise Fund</h1>
            {error ? <AlertError message={error} /> : <AlertSuccess message="Add Fund Success" />}
              <form
                onSubmit={handleSubmit}
                className="form-fund-page-form"
                encType="multipart/form"
              >
                <input onChange={handleChange} name="title" type="text" placeholder="Title" />
                <label onChange={handleChange} htmlFor="thumbnail">Attach Thumbnail</label>
                <input onChange={handleChange} name="thumbnail" id="thumbnail" type="file" />
                <input onChange={handleChange} name="goal" type="text" placeholder="Goals Donation" />
                <input onChange={handleChange} name="expiredDate" type="number" placeholder="ExpiredDate" />
                <textarea onChange={handleChange} name="description" placeholder="Description" />
                <button>{loading ? <Loading /> : "Public Fundraising"}</button>
              </form>
          </div>
        </div>
      </div>
    </>
  );
}
