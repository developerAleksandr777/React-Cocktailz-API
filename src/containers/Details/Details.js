import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GET_DETAILS_ASYNC } from "../../redux/actions/actions";
import { LazyLoadImage } from "react-lazy-load-image-component";
import s from "./Details.module.scss";
import MUIAccordeon from "../../components/MUIAccordeon/MUIAccordeon";
import SwiperJs from "../../components/Swiper/SwiperJs";
import { CLEAR_DETAILS_ACTION } from "../../redux/actions/types";
import Loader from "../../components/Loader/Loader";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.details);
  const { loading, error } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(GET_DETAILS_ASYNC(id));
    return () => {
      dispatch(CLEAR_DETAILS_ACTION({}));
    };
  }, [dispatch, id]);

  const generateNewInclude = useMemo(() => {
    return (includeStr) => {
      return Object.entries(data)
        .filter(([key, value]) => key.includes(includeStr) && value)
        ?.map(([_, value]) => value);
    };
  }, [data]);

  const resultIngr = generateNewInclude("strIngredient");
  const resultMeas = generateNewInclude("strMeasure");

  const resultCountry = useMemo(
    () =>
      Object.entries(data)
        .filter(([key, value]) => key.includes("strInstructions") && value)
        .map(([key, value]) => ({
          lang: key.split("strInstructions")[1] || "EN",
          value,
        })),
    [data]
  );

  const render = resultMeas?.map((el, index) => <p key={index}>{el}</p>);

  if (error) return <h2>{error}</h2>;

  return (
    <>
      {loading && <Loader />}

      <div className={s.details}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className={s.details__box}>
                <LazyLoadImage
                  alt="cocktails"
                  effect="blur"
                  src={data.strDrinkThumb}
                  className={s.details__lazy__load}
                />
              </div>
            </div>
            <div className="col-6">
              <div className={s.details__box}>
                <SwiperJs resultIngr={resultIngr} resultMeas={resultMeas} />
                <div className={s.details__meas}>{render}</div>

                <MUIAccordeon resultCountry={resultCountry} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
