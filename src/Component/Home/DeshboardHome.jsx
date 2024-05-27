import Marquee from "react-fast-marquee";

const DeshboardHome = () => {
  return (
    <>
      <section className=" text-white lg:pb-4 ">
        <div className=" mx-auto lg:flex gap-1 lg:mt-0">
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              {/* Divider  */}
              <div className="lg:w-auto border rounded p-4  ">
                <Marquee>
                  <h3 className="pr-20">
                    <span className="font-bold text-red-500">
                      Faculty Notice:
                    </span>{" "}
                    The faculty meeting scheduled for [date] has been postponed
                    to [new date] due to unforeseen circumstances. Please make a
                    note of the change.
                  </h3>

                  <h3 className="pr-20">
                    <span className="font-bold text-red-500">
                      Attention Faculty Members:
                    </span>{" "}
                    The deadline for submitting research proposals for the
                    upcoming conference has been extended to [new deadline
                    date]. Kindly ensure timely submission.
                  </h3>
                  <h3 className="pr-20">
                    <span className="font-bold text-red-500">
                      Important Notice:
                    </span>{" "}
                    The departmental workshop on [topic] will be held on [date]
                    from [time]. All faculty members are encouraged to attend.
                  </h3>
                </Marquee>

                <section>
                  <div className="container px-3 pb-8 mx-auto">
                    <div className="lg:grid items-center gap-2 xl:grid-cols-5">
                      <div className="lg:max-w-2xl text-gray-100 mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-3xl font-bold">
                          Why Join Our Faculty?
                        </h2>
                        <p className="text-base text-justify">
                          At the Green University of Bangladesh, we provide a
                          supportive and collaborative environment for our
                          faculty members. Our institution values innovation,
                          research, and academic excellence, offering ample
                          opportunities for professional growth and development.
                          Joining our faculty means becoming part of a community
                          dedicated to shaping the future of education and
                          making a meaningful impact on society.
                        </p>
                      </div>

                      <div className="p-2 col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="grid content-center gap-4">
                            <div
                              style={{ backdropFilter: "blur(8px)" }}
                              className="p-6 rounded  shadow-md border space-y-3"
                            >
                              <div className="flex flex-col items-center lg:items-start mb-2 lg:space-x-3">
                                <img
                                  src="https://i.ibb.co/VLcjmCS/icon5.png"
                                  className="h-auto w-auto"
                                  alt=""
                                />
                              </div>
                              <div className="text-center lg:text-start">
                                <p className="text-lg font-semibold">
                                  Awesome Teachers
                                </p>
                              </div>
                              <p className="text-sm font-light text-justify">
                                An audire commodo habemus cum. Ne sed corrumpit
                                repudiandae. Tota aliquip democritum pro in, nec
                                democritum intellegam ne.
                              </p>
                            </div>
                            <div
                              style={{ backdropFilter: "blur(8px)" }}
                              className="p-6 rounded shadow-md   border space-y-3"
                            >
                              <div className="flex flex-col items-center lg:items-start mb-2 lg:space-x-3">
                                <img
                                  src="https://i.ibb.co/sCCv459/icon8.png"
                                  className="h-auto w-auto"
                                  alt=""
                                />
                              </div>
                              <div className="text-center lg:text-start">
                                <p className="text-lg font-semibold">
                                  Student Support Service
                                </p>
                              </div>
                              <p className="text-sm font-light text-justify">
                                Sit wisi sapientem ut, pri civibus temporibus
                                voluptatibus et, ius cu hinc fabulas. Nam
                                meliore minimum et, regione convenire cum id.
                              </p>
                            </div>
                          </div>
                          <div className="grid content-center gap-4">
                            <div
                              style={{ backdropFilter: "blur(8px)" }}
                              className="p-6 rounded shadow-md   border space-y-3"
                            >
                              <div className="flex flex-col items-center lg:items-start mb-2 lg:space-x-3">
                                <img
                                  src="https://i.ibb.co/zP0TwGw/icon6.png"
                                  className="h-auto w-auto"
                                  alt=""
                                />
                              </div>
                              <div className="text-center lg:text-start">
                                <p className="text-lg font-semibold">
                                  Global Certificate
                                </p>
                              </div>
                              <p className="text-sm font-light text-justify">
                                Putant omnium elaboraret per ut. Id dicta
                                tritani nominavi quo, mea id justo errem
                                elaboraret. Agam mollis scripserit ea his, ut
                                nec postea verear persecuti. Ea noster senserit
                                eam, ferri omittantur ei nec. Id mel solet
                                libris efficiantur, commune explicari et eos.
                                Case movet ad est, sed tota vocent appetere ea.
                              </p>
                            </div>
                            <div
                              style={{ backdropFilter: "blur(8px)" }}
                              className="p-6 rounded shadow-md   border space-y-3"
                            >
                              <div className="flex flex-col items-center lg:items-start mb-2 lg:space-x-3">
                                <img
                                  src="https://i.ibb.co/F8DSmbM/icon7.png"
                                  className="h-auto w-auto"
                                  alt=""
                                />
                              </div>
                              <div className="text-center lg:text-start">
                                <p className="text-lg font-semibold">
                                  Best Program
                                </p>
                              </div>
                              <p className="text-sm font-light text-justify">
                                Te omnes virtute volutpat sed. Ei esse eros
                                interesset vel, ei populo denique ocurreret vix,
                                eu cum pertinax mandamus vituperatoribus. Solum
                                nihil luptatum per ex, ei amet viderer eos. Ea
                                illum labitur mnesarchum pro. Eius meis
                                salutandi ei nam, alterum expetenda et nec.
                                Expetenda intellegat at eum, per mazim sanctus
                                honestatis ad. Ei noluisse invenire vix. Te
                                ancillae patrioque qui, probo bonorum vivendum
                                ex vim.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeshboardHome;
