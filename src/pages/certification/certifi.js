import Certificate from "../../components/Certification";
import PageHeader from "../../components/PageHeader";
import CertificationsData from "../certification/CertificationsData.json";

const Certify = () => {
const CertificatetList = () =>
CertificationsData.map((Certificates, i) => (
      <Certificate
        key={i}
        id={Certificates.id}
        name={Certificates.name}
        org={Certificates.org}
        issued={Certificates.issued}
        expiry={Certificates.expiry}
        credentialId={Certificates.credentialId}
        credentialUrl={Certificates.credentialUrl}
        url={Certificates.url}
        
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Certificates" description="who certified me" />
      <div className="row">
        <CertificatetList />
      </div>
    </section>
  );
};

export default Certify;