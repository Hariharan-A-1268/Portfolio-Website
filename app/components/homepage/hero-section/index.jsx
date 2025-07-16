// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            {", "}
            <br />
            {` I'm an Aspiring `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>My Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">developerProfile</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
            
              {/* name */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">name:</span>{' '}
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Hariharan A</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
            
              {/* frontendSkills */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">frontendSkills:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">React</span><span className="text-gray-400">{`',`}</span>{' '}
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">Angular</span><span className="text-gray-400">{`',`}</span>{' '}
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">Next.js</span><span className="text-gray-400">{`'`}</span>
                <span className="text-gray-400">{'],'}</span>
              </div>
            
              {/* backendSkills */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">backendSkills:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">Node.js</span><span className="text-gray-400">{`',`}</span>{' '}
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">Express</span><span className="text-gray-400">{`',`}</span>{' '}
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">Flask</span><span className="text-gray-400">{`'`}</span>
                <span className="text-gray-400">{'],'}</span>
              </div>
            
              {/* databases */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">databases:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">PostgreSQL</span><span className="text-gray-400">{`',`}</span>{' '}
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">MySQL</span><span className="text-gray-400">{`',`}</span>{' '}
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">SQLite</span><span className="text-gray-400">{`',`}</span>{' '}
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">MongoDB</span><span className="text-gray-400">{`'`}</span>
                <span className="text-gray-400">{'],'}</span>
              </div>
            
              {/* dataMappers */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">dataMappers:</span>{' '}
                <span className="text-gray-400">{'{'}</span>
              </div>
            
              <div className="ml-8 lg:ml-12">
                <span className="text-white">orms:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">SQLAlchemy</span><span className="text-gray-400">{`'`}</span>
                <span className="text-gray-400">{'],'}</span>
              </div>
            
              <div className="ml-8 lg:ml-12">
                <span className="text-white">odms:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">Mongoose</span><span className="text-gray-400">{`'`}</span>
                <span className="text-gray-400">{']'}</span>
              </div>
            
              <div className="ml-4 lg:ml-8">
                <span className="text-gray-400">{'},'}</span>
              </div>
            
              {/* programmingLanguages */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">programmingLanguages:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                {['Python', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript'].map((lang, i, arr) => (
                  <span key={lang}>
                    <span className="text-gray-400">{`'`}</span><span className="text-amber-300">{lang}</span><span className="text-gray-400">{`'`}</span>
                    {i < arr.length - 1 && <span className="text-gray-400">, </span>}
                  </span>
                ))}
                <span className="text-gray-400">{'],'}</span>
              </div>
            
              {/* toolsAndPlatforms */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">toolsAndPlatforms:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                {[
                  'JIRA', 'Git', 'GitHub', 'Postman', 'RESTful API', 'SoapUI',
                  'Mockoon API', 'Studio 3T', 'Oracle SQL Developer',
                  'Google Cloud Platform', 'Anaconda'
                ].map((tool, i, arr) => (
                  <span key={tool}>
                    <span className="text-gray-400">{`'`}</span><span className="text-amber-300">{tool}</span><span className="text-gray-400">{`'`}</span>
                    {i < arr.length - 1 && <span className="text-gray-400">, </span>}
                  </span>
                ))}
                <span className="text-gray-400">{'],'}</span>
              </div>
            
              {/* devOpsTools */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">devOpsTools:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">Render</span><span className="text-gray-400">{`',`}</span>{' '}
                <span className="text-gray-400">{`'`}</span><span className="text-amber-300">Vercel</span><span className="text-gray-400">{`'`}</span>
                <span className="text-gray-400">{'],'}</span>
              </div>
            
              {/* certifications */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">certifications:</span>{' '}
                <span className="text-gray-400">{'['}</span>
                {[
                  'Machine Learning A-Z by Udemy',
                  'Full Stack Web Development Course',
                  'Angular Course',
                  'Java Masterclass Course'
                ].map((cert, i, arr) => (
                  <span key={cert}>
                    <span className="text-gray-400">{`'`}</span><span className="text-amber-300">{cert}</span><span className="text-gray-400">{`'`}</span>
                    {i < arr.length - 1 && <span className="text-gray-400">, </span>}
                  </span>
                ))}
                <span className="text-gray-400">{'],'}</span>
              </div>
            
              {/* softSkills */}
              <div className="ml-4 lg:ml-8">
                <span className="text-white">softSkills:</span>{' '}
                <span className="text-gray-400">{'{'}</span>
              </div>
            
              <div className="ml-8 lg:ml-12">
                <span className="text-white">hardWorker:</span>{' '}
                <span className="text-orange-400">true</span><span className="text-gray-400">,</span>
              </div>
              <div className="ml-8 lg:ml-12">
                <span className="text-white">quickLearner:</span>{' '}
                <span className="text-orange-400">true</span><span className="text-gray-400">,</span>
              </div>
              <div className="ml-8 lg:ml-12">
                <span className="text-white">problemSolver:</span>{' '}
                <span className="text-orange-400">true</span>
              </div>
            
              <div className="ml-4 lg:ml-8">
                <span className="text-gray-400">{'}'}</span>
              </div>
            
              {/* closing bracket */}
              <div>
                <span className="text-gray-400">{'};'}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
