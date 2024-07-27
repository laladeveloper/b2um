import React, { useEffect, useRef, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getOrders, getUser } from "../../../app/actions/adminActions";
import "./orders.css";
import { toast } from "sonner";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allOrders } = useSelector((state) => state.admin);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Change this value according to your requirement
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const tableRef = useRef(null);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  console.log(allOrders?.length);
  const handleScroll = () => {
    const table = tableRef.current;
    if (table) {
      const { scrollTop, clientHeight, scrollHeight } = table;
      if (scrollTop + clientHeight >= scrollHeight) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    const table = tableRef.current;
    if (table) {
      table.addEventListener("scroll", handleScroll);
      return () => {
        table.removeEventListener("scroll", handleScroll);
      };
    }
  }, [currentPage]);

  const handlePerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const sortData = (key) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const sortedUsers = allOrders
    ? allOrders.slice().sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    : [];

  const currentUsers = sortedUsers.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {allOrders.length < 1 ? (
        <>
          <h1 className="flex items-center justify-center h-screen w-full">
            There are no orders Yet!
          </h1>
        </>
      ) : (
        <>
          {" "}
          <div className="userSection pt-[12%] pl-0 sm:pt-[15%] md:pt-[15%] xsm:pt-[20%] ">
            <h1 className="flex justify-center items-center py-2 font-semibold ">
              All Orders Info
            </h1>
            <div className="overflow-x-scroll userTable">
              <table>
                <thead className="tableheading">
                  <tr>
                    <th>Sr #</th>
                    <th onClick={() => sortData("_id")}>
                      <p className="flex items-center ">
                        ID
                        {sortConfig.key === "_id" && (
                          <span className="sort-icon mr-4">
                            {sortConfig.direction === "asc" ? (
                              <TbSortAscendingLetters />
                            ) : (
                              <TbSortDescendingLetters />
                            )}
                          </span>
                        )}
                      </p>
                    </th>
                    <th onClick={() => sortData("username")}>
                      <p className="flex items-center">
                        Buyer
                        {sortConfig.key === "username" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <TbSortAscendingLetters />
                            ) : (
                              <TbSortDescendingLetters />
                            )}
                          </span>
                        )}{" "}
                      </p>
                    </th>
                    <th onClick={() => sortData("email")}>
                      <p className="flex items-center">
                        Seller
                        {sortConfig.key === "email" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <TbSortAscendingLetters />
                            ) : (
                              <TbSortDescendingLetters />
                            )}
                          </span>
                        )}{" "}
                      </p>
                    </th>
                    <th onClick={() => sortData("role")}>
                      <p className="flex items-center">
                        Product
                        {sortConfig.key === "role" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <TbSortAscendingLetters />
                            ) : (
                              <TbSortDescendingLetters />
                            )}
                          </span>
                        )}{" "}
                      </p>
                    </th>
                    <th onClick={() => sortData("balance")}>
                      <p className="flex items-center">
                        Order Price
                        {sortConfig.key === "balance" && (
                          <span className="sort-icon">
                            {sortConfig.direction === "asc" ? (
                              <TbSortAscendingLetters />
                            ) : (
                              <TbSortDescendingLetters />
                            )}
                          </span>
                        )}{" "}
                      </p>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user, index) => (
                    <tr key={index}>
                      <td>
                        {index + 1 + currentPage * itemsPerPage - itemsPerPage}
                      </td>
                      <td>
                        {user.uid || user._id} {console.log(user)}
                      </td>
                      <td>{user.user?.username  || "Anonymys user"}</td>
                      <td>{user.seller?.username || "Anonymys user" }</td>
                      <td>{user.product?.name || "Anonymys Product" } </td>
                      <td>
                        {(user.quantity * user.product.price * 1.15).toFixed(2)}{" "}
                        USD{" "}
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            toast.info(`This feature is under development`);
                          }}
                          className="btn"
                        >
                          {<FaRegEdit size={26} />}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination controls */}
            <div className="flex justify-around items-center px-6 pt-6 pb-28 ">
              <div className=" text-sm">
                {indexOfFirstItem + 1}-
                {indexOfLastItem < allOrders.length
                  ? indexOfLastItem
                  : allOrders.length}{" "}
                of {allOrders.length} Users
              </div>
              <div className="flex justify-center items-center flex-col">
                <select
                  name="options"
                  className=" rounded-full mx-4 px-2 py-1 hover:border-slate-500 border-2"
                  value={itemsPerPage}
                  onChange={handlePerPageChange}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <label htmlFor="options" className=" text-sm">
                  Orders per page
                </label>
              </div>
              <div className="">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                  className=" cursor-pointer"
                >
                  <MdSkipPrevious size={30} />
                </button>
                <button
                  disabled={indexOfLastItem >= sortedUsers.length}
                  onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                  className=" cursor-pointer"
                >
                  <MdSkipNext size={30} />
                </button>
              </div>
              <div className=" text-sm ">
                Page {currentPage} of{" "}
                {Math.ceil(sortedUsers.length / itemsPerPage)}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default User;
