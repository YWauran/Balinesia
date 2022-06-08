/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      <div
        className="card-container"
        style={{ backgroundImage: `url('${`https://image.tmdb.org/t/p/w500/`+ props.item.backdrop_path}')` }}
      >
        <div className="min-h-full bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50 p-3">
          <img
            className="w-full h-40 object-cover rounded-xl"
            src={`https://image.tmdb.org/t/p/w500/`+ props.item.backdrop_path}
            alt=""
          />
          <div className="p-2">
            <Link to='/'>     
            <h2 className="font-bold text-lg mb-2 text-theme1 ">{props.item.title || props.item.name}</h2>
            </Link>
            <p className="text-sm text-gray-100">{props.item.overview.substring(0,150) +"..."}
            </p>
            <h3 className="text-center font-semibold text-theme1 mt-5">
              Lokasi
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;