import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import {IoArrowBack} from "react-icons/io5";

export default function MenuItem() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restoranmenu1.vercel.app/menu/" + id)
      .then((res) => {
        setMenu(res.data.menu);
        axios.get(`https://restoranmenu1.vercel.app/catalogMenus/${res.data.menu.category_id}`)
        .then((res) => {
            setCategory(res.data.menus);
          });
      });
  }, [id]);

  if (!menu || !category) {
    return <div>Loading...</div>;
  }
  function handlerLoad() {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="fixed bg-white h-12 w-12 text-center items-center justify-center flex rounded-full left-[6px] top-3">
        <Link to='/home'>
          <IoArrowBack />
        </Link>
      </div>
      {loading ? (
        <div className="">
          <img
            src={menu.photo_url}
            alt=""
            style={{ display: "none" }}
          />
          <SkeletonTheme baseColor="#ccc" highlightColor="#fff" duration={2}>
            <p>
              <Skeleton type="pulse" height={270} />
            </p>
          </SkeletonTheme>
        </div>
      ) : (
        <img
          src={menu.photo_url}
          alt=""
          className="w-full h-[270px]"
        />
      )}
      <div className="p-2">
        <h1 className="text-3xl font-bold mb-4">{menu.name}</h1>
        <p className="text-lg text-gray-500 mb-4">{menu.description}</p>
        <p className="text-2xl font-bold mb-3">
          {Number(menu.price).toLocaleString()} so'm
        </p>
      </div>
      <div className="text-2xl p-2 font-600">Popular Items</div>
      <div className="p-4">
        {category.map((item) => (
          <Link to={`/menu/${item._id}`} key={item._id}>
            {item._id !== id ? (
              <div className="flex items-center p-4">
                {loading ? (
                  <div className="">
                    <img
                      src={menu.photo_url}
                      alt={menu.name}
                      style={{display: "none"}}
                      onLoad={handlerLoad}
                    />
                    <SkeletonTheme baseColor="#ccc" highlightColor="#fff">
                      <p>
                        <Skeleton width={96} height={72} />
                      </p>
                    </SkeletonTheme>
                  </div>
                ) : (
                  <img
                    src={item.photo_url}
                    alt=""
                    className=" h-24 w-32 object-cover rounded-lg"
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-500 text-sm">{Number(item.price).toLocaleString()} so'm</p>
                </div>
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
