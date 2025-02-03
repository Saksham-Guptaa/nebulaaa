"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ui/footer";

const images = [
  "/logofashion.png",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536503/b9pnmsw9amexhpbly2ys.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536502/cq2j5bzittg73rwtxiwk.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536481/h42wjq3e8q4ln8e6zwcv.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536480/lgdr0zfsmvfmzydhbvtn.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536480/ivymf7vvlivanhke31fx.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536478/tfjykomsriktviqstnoi.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536478/rfxjrv1t6mfjtxshfodm.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536473/rts3ll1gmpfnlzpziajq.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536473/sioh9ehbkmlpjfn52vyt.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536473/m5s2vatnrm5ty6sucjci.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536472/qj1worx9jhz2sym3rawz.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536472/lcqwwuiyquw3yn1r15uq.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536470/bkijw4778dpitzrkiqjp.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536470/khby7bzc6l5dipfzhhie.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536470/ieanuh8w7ec0ekygjmt1.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536469/waw1hkrkcvqp3fdesss6.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536468/gl35r6jgmjwovpxitllo.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536468/nnb8isirj2jittw8qxtq.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536466/rsedg6nc0clnxjl3csre.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536466/vcanplmkjrhu2npre0dj.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536466/sv4iy2zhmc7kgascb4au.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536465/bybwdnmkdi4xq4qx6uck.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536463/cjjeclybhapfzypohtrh.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536463/zyi8lobhqlc4s46x5jrz.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536462/oziyjgxuu7ukca5ek3z3.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536460/w18tzwedvkgh8etv7wds.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536458/w1efowcmez9oxbknwbkh.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536458/wqtesfditqq0cvbxssry.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536458/bbgptmzttwwgtbs6cbkz.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536456/kwbm85amtrpb81hcv1qz.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536454/jufwpnfa7x5s5owuhyzo.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536453/usc9ii7dapy8bzp0kgae.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536451/v4fd6bqttjryl403u4nk.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536451/dvftrbzodbgnccwitt6a.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536448/xebbaa40z6zumsmp8vn2.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536449/ne7qjhmyinosqzwlwv1i.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536449/dfgsj1dyu6zlducn1byb.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536446/gxoupxv0qsdt9h8aawgw.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536446/xb4kxjs51wotyvrtge3p.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536445/q0gfwk8psusywc69v6ko.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536445/ddb30gqytx0razvziqnl.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536443/xenjyoqgbssvj0jvktkq.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536443/m4x6mjlw80unbaenthmp.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536442/hy2qrzbpkjcmkz9p8ujl.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536442/hcl02qnhq2xrb7rsotyk.jpg",
  "https://res.cloudinary.com/dski9pira/image/upload/v1738536442/j3sygwejpyr8mnqcxhit.jpg",
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="p-8">
        <h1 className="mb-8 text-center text-3xl font-bold">
          PORTFOLIO Showcase
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Card className="overflow-hidden rounded-2xl shadow-md">
                <CardContent>
                  <img
                    src={image}
                    alt={`Showcase ${index}`}
                    className="h-64 w-full rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-[90vh] max-w-full rounded-lg"
            />
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 bg-white text-black"
            >
              Close
            </Button>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
