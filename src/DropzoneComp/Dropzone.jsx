import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ className }) => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });
  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };
  const removeRejected = (name) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  };

  return (
    <form className="w-full">
      <div
        {...getRootProps({
          className: className,
        })}
        className="w-full"
      >
        <input {...getInputProps()} />
        <div className="border-dashed w-full h-[250px] border-[3px] border-white rounded-[20px] cursor-grab flex flex-col items-center justify-evenly text-[16px]">
          {isDragActive ? (
            <p className="text-white text-[16px] ss:text-[20px] max-w-[80%] text-center">
              Drop the files here ...
            </p>
          ) : (
            <div className="flex flex-col items-center justify-evenly">
              <h1 className="text-gray-400 text-[21px] ss:text-[27] font-[700] text-center uppercase">
                Upload files
              </h1>
              <p className="text-white text-[16px] ss:text-[20px] max-w-[80%] text-center">
                Drag & drop files here, or click to select files
              </p>
            </div>
          )}
        </div>
      </div>
      {/* Preview */}

      <div className="mt-10 mb-16">
        <div className="flex flex-col-reverse md:flex-row justify-between w-full">
          <div className="flex flex-col justify-between w-full">
            <h3 className="title mt-10 md:mt-0 text-lg font-semibold text-neutral-600 border-b pb-3">
              Accepted Files:
            </h3>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
              {files.map((file) => (
                <li key={file.name} className="relative rounded-md shadow-lg">
                  <button
                    type="button"
                    className="w-4 h-4 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
                    onClick={() => removeFile(file.name)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-white hover:text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <p className="mt-2 text-white text-[12px] font-medium">
                    {file.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row justify-end items-start flex-wrap gap-4 w-full">
            {/* <h2 className="title text-3xl font-semibold text-gray-400">
            Preview
          </h2> */}
            <button
              onClick={() => removeAll()}
              className="py-2 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
            >
              Remove all files
            </button>
            <button className=" py-2 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-purple-400 rounded-md px-3 hover:bg-purple-400 hover:text-white transition-colors">
              Upload
            </button>
          </div>
        </div>

        {/* Accepted files */}

        {/* Rejected Files */}
        {/* <h3 className="title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3">
          Rejected Files
        </h3>
        <ul className="mt-6 flex flex-col">
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="flex items-start justify-between">
              <div>
                <p className="mt-2 text-neutral-500 text-sm font-medium">
                  {file.name}
                </p>
                <ul className="text-[12px] text-red-400">
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </form>
  );
};

export default Dropzone;
