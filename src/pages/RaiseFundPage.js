import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
//import Card from "../components/Card";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import "./raisefund.css";
import { getUserById } from "../action/userActions";
import CardList from "../components/CardList";

export default function RaiseFundPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getUserByIdReducer);
  const { loading, user } = userState;

  //console.log(user[0].funds);

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getUserById(id));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>HOLYWAYS || RAISE FUND</title>
      </Helmet>
      <div>
        <Navbar />
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="container-2">
              <div className="raise-fund-body">
                <h1>My Raise Fund</h1>
                {user[0]?.funds.map((item, index) => {
                  return <CardList column={2} key={index} data={item} viewFund={true} />;
                })}
              </div>

              <div className="raise-fund-button">
                <Link to="/form-fund">
                  <button>Make Raise Fund</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
