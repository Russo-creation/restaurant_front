import Link from "next/link";

import { i18n, withTranslation } from "../i18n";

type Props = {
  t: (arg0: string) => React.ReactNode;
};

const Error = ({ t }: Props) => {
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>
        Try
        <Link href="/">
          <a>going back</a>
        </Link>
      </p>
    </div>
  );
};

export default withTranslation("404")(Error);
