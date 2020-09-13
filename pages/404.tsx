import Link from "next/link";

const errorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>
        Try
        <Link href="/">
          <a> going back</a>
        </Link>
      </p>
    </div>
  );
};

export default errorPage;
