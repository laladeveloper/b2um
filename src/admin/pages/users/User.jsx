import "./user.css";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUsers } from "../../../app/actions/adminActions";
import { FaRegEdit } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
  console.log(allUsers);
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
            <thead>
              <tr>
                <th onClick={() => sortData("_id")}>Sr #</th>
                <th onClick={() => sortData("_id")}>ID</th>
                <th onClick={() => sortData("username")}>User Name</th>
                <th onClick={() => sortData("email")}>Email</th>
                <th onClick={() => sortData("role")}>Role</th>
                <th onClick={() => sortData("balance")}>Balance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.balance} USD </td>
                  <td>
                    <button onClick={()=>{navigate(`/admin/users/${user.username}`);dispatch(getUser(user.username))}} className="btn">
                      {<FaRegEdit size={26} />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination controls */}
        <div className="flex justify-around items-center pb-4">
          <div>
            Page {currentPage} of {Math.ceil(sortedUsers.length / itemsPerPage)}
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
          <div>
            <select value={itemsPerPage} onChange={handlePerPageChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>Items per page</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
