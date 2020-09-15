import Link from "next/link";

import { i18n, withTranslation } from "../i18n";

type Props = {
  t: (arg0: string) => React.ReactNode;
};

const errorPage = ({ t }: Props) => {
  return (
    <div>
      <h1>Ooops, something went wrong</h1>
      <p>
        Try
        <Link href="/">
          <a>going back</a>
        </Link>
      </p>
    </div>
  );
};

errorPage.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default withTranslation("common")(errorPage);
