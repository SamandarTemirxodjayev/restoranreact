import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";

export default function CatalogMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://restoranmenu1.vercel.app/catalogMenus/${id}`)
    .then((res) => {
        setLoading(true); 
        setMenu(res.data.menus);
      });
  }, [id]);

  function handlerLoad(){
    setLoading(false);
  }

  return (
    <div>
      {menu.map((menu) => (
        <Link
          to={`/menu/${menu._id}`}
          key={menu._id}
          className="bg-white rounded-lg mt-5"
        >
          {loading ? (
            <div className="">
              <img
                src={menu.photo_url}
                alt=""
                style={{display:"none"}}
                onLoad={handlerLoad}
              />
              <SkeletonTheme baseColor="#ccc" highlightColor="#fff" duration={2}>
                <p>
                  <Skeleton type="pulse" height={220} />
                </p>
              </SkeletonTheme>
            </div>
          ) : (
            <img
              src={menu.photo_url}
              alt={menu.name}
              className="w-full rounded-t-xl "
              style={{ height: "200px" }}
            />
          )}

          <div className="p-1 pb-10">
            <h3 className="font-bold text-2xl mb-2">{menu.name}</h3>
            <div className="flex justify-between text-end">
              <span className="font-bold text-xl">
                {Number(menu.price).toLocaleString()} so'm
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
