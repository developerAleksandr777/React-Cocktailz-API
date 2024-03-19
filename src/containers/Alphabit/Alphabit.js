import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALPHABIT_ASYNC } from "../../redux/actions/actions";
import Item from "../../components/Item/Item";
import { useNavigate } from "react-router-dom";
import AlphabitPagination from "../../components/Alphabit pagination/AlphabitPagination";
import { useParams } from "react-router-dom";

const Alphabit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { alphabit } = useSelector((state) => state.alphabit);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    Promise.all([dispatch(GET_ALPHABIT_ASYNC(id))]);
  }, [dispatch, id]);

  const render = alphabit?.map((item) => {
    return (
      <Item
        item={item}
        key={item.idDrink}
        func={() => navigate("/details/" + item.idDrink)}
      />
    );
  });
  return (
    <>
      <Header title="Alphabit" />
      <div className="alphabit">
        <div className="container">
          <AlphabitPagination id={id} />
          <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {render}
          </div>
        </div>
      </div>
    </>
  );
};

export default Alphabit;
