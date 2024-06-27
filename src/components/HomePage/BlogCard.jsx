import React from "react";
import { FaHashtag, FaPencilAlt, FaRegClock } from "react-icons/fa";
import { formatDate } from "../../utils/formatDate";

const BlogCard = ({ data, number }) => {
  const { name, subName, createdAt, by, updatedAt, tag, desc, thumbnail } =
    data;

  const containerClassName =
    number % 2 === 0
      ? "border-2 border-blue-50 flex flex-row w-[85%] my-10 mx-auto justify-between p-5 rounded-xl px-10 bg-[#161D29] text-white gap-2 items-center"
      : "border-2 border-blue-50 flex  flex-row-reverse w-[85%] my-10 mx-auto justify-between p-5 rounded-xl px-10 bg-[#161D29] text-white gap-2 items-center";

  return (
    <div className={containerClassName}>
      <div className="flex flex-col gap-2 w-[50%]">
        <p className="font-semibold text-white text-3xl ">{name}</p>
        <p className="text-white text-xl ">{subName}</p>
        <p className="flex flex-row gap-2 items-center text-white ">
          <FaPencilAlt />
          {by}
        </p>
        <p className="flex flex-row gap-2 items-center text-white ">
          <FaRegClock />
          {formatDate(createdAt)}
        </p>
        <p>
          Updated At:{" "}
          {updatedAt === null ? "Not Updated" : formatDate(updatedAt)}
        </p>
        <div className="flex flex-row gap-2">
          {JSON.parse(tag).map((tagItem, index) => (
            <p
              className="flex w-fit flex-row items-center gap-1 rounded-full bg-[#032ff2] px-2 py-[2px] text-[12px] font-medium text-white"
              key={`${tagItem}-${index}`}
            >
              <FaHashtag size={14} />
              {tagItem}
            </p>
          ))}
        </div>
        <p className="my-2">{desc}</p>
      </div>
      <div className="w-[40%]">
        <img src={thumbnail} alt={name} className="w-[650px] rounded-xl" />
      </div>
    </div>
  );
};

export default BlogCard;
