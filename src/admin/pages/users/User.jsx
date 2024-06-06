import "./user.css";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUsers } from "../../../app/actions/adminActions";
import { FaRegEdit } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allUsers } = useSelector((state) => state.admin);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Change this value according to your requirement
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const tableRef = useRef(null);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  // console.log(allUsers);
  console.log(allUsers.length);
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

  const sortedUsers = allUsers
    ? allUsers.slice().sort((a, b) => {
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
      <div className="userSection pt-[12%] pl-0 sm:pt-[15%] md:pt-[15%] xsm:pt-[20%] ">
        <h1 className="flex justify-center items-center py-2 font-semibold ">
          All Users Info
        </h1>
        <div className="overflow-x-scroll userTable">
          <table>
            <thead className="tableheading">
              <tr>
                <th>Sr #</th>
                <th onClick={() => sortData("_id")}>
                  <p className="flex items-center ">
                    {" "}
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
                    User Name
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
                    Email
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
                    Desired Role{" "}
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
                    Balance{" "}
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
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.balance} USD </td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/admin/users/${user.username}`);
                        dispatch(getUser(user.username));
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
            {indexOfLastItem < allUsers.length
              ? indexOfLastItem
              : allUsers.length}{" "}
            of {allUsers.length} Users
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
              Users per page
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
            Page {currentPage} of {Math.ceil(sortedUsers.length / itemsPerPage)}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
