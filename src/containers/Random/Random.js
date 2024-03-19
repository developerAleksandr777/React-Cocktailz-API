import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_RANDOM_ASYNC } from "../../redux/actions/actions";
import Details from "../Details/Details";
import s from "./Random.module.scss";
import Header from "../../components/Header/Header";

const Random = () => {
  const dispatch = useDispatch();
  const { random } = useSelector((state) => state.random);
  console.log(random);
  useEffect(() => {
    Promise.all([dispatch(GET_RANDOM_ASYNC())]);
  }, [dispatch]);
  return (
    <>
      <Header title="Random coctail" />
      <Details />
    </>
  );
};

export default Random;
