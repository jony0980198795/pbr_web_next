import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
            <div className="max-w-4xl mt-8 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
                    We pride ourselves not only on the quality of our materials, but also on the technical
                    support and collaboration we offer to researchers, engineers, and industry professionals.
                </p>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                    For more details about our products and services, visit our website or contact us directly.
                    We are shaping the future of material science.
                </p>
                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    {/* Company Block */}
                    <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
                        <form action="">
                            <div className="mt-2">
                                <input type="text" placeholder="Name:" className="w-full border-1 pl-2 rounded-xl" />
                            </div>
                            <div className="mt-2">
                                <input type="text" placeholder="E-mail:" className="w-full border-1 pl-2 rounded-xl" />
                            </div>
                            <div className="mt-2">
                                <input type="text" placeholder="Subject:" className="w-full border-1 pl-2 rounded-xl" />
                            </div>
                            <div className="mt-2">
                                <textarea className="w-full border-1 p-2 rounded-xl h-30" name="" id="" placeholder="Message"></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-green-600 px-2 rounded-xl mt-1 text-white">Send Message</button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Block */}
                    <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition space-y-4">
                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">Company</h3>
                        <p className="text-gray-600 font-medium">PBR CO., LTD.</p>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaPhone className="text-blue-600" /> +66 (0)86 3636 324
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaEnvelope className="text-blue-600" /> pbr@pbr.co.th
                        </div>

                        <a href="https://www.pbr.co.th" target="_blank"
                            className="flex items-center gap-3 text-blue-600 hover:underline">
                            <FaGlobe /> www.pbr.co.th
                        </a>

                        <a href="https://www.google.com/maps/@13.137469,100.9163066,3a,75y,95.29h,87.44t/data=!3m7!1e1!3m5!1se6ayysBv2d9OCYRBi6wZgA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D2.562630936478442%26panoid%3De6ayysBv2d9OCYRBi6wZgA%26yaw%3D95.29058078327333!7i16384!8i8192?hl=th&entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                            className="flex items-center gap-3 text-blue-600 hover:underline">
                            <FaMapMarkerAlt /> Google Map Location
                        </a>
                        {/* <p className="text-gray-600 mt-2 text-sm">
                            33 Mu 3, Surasak Sub-district,<br />
                            Si Racha District, Chonburi 20110<br />
                            THAILAND
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
