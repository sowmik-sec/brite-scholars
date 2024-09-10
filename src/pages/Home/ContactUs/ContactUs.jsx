import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";

function ContactUs() {
  const { user } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <SectionTitle heading="Contact us" subHeading="Get in touch" />
      <div className="hero bg-base-200 min-h-screen">
        <div className="flex justify-evenly flex-col lg:flex-row-reverse">
          <div className="text-center lg:ml-20">
            <h2 className="text-3xl">CONTACT DETAILS</h2>
            <p>
              brite@scholars.com <br />
              (908) 686-1200
            </p>
            <div className="my-5">
              <h3 className="text-2xl font-bold">Westfield</h3>
              <p>
                233 NorthAvenue E. <br />
                Short Hills, NJ 07901
              </p>
            </div>
            <div className="my-5">
              <h2 className="text-2xl font-bold">Summit</h2>
              <p>
                357 Springfield Ave. <br />
                Short Hills, NJ 07901
              </p>
            </div>
            <div className="my-5">
              <h2 className="text-2xl font-bold">Short Hills Office</h2>
              <p>
                549 Millburn Ave. <br />
                Short Hills, NJ 07078
              </p>
            </div>
          </div>
          <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  readOnly
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  readOnly
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <textarea
                  cols="30"
                  type="text"
                  placeholder="Message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary btn-outline">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
