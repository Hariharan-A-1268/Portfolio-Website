import angular from "/public/svg/skills/angular.svg";
import bootstrap from "/public/svg/skills/bootstrap.svg";
import c from "/public/svg/skills/c.svg";
import cplusplus from "/public/svg/skills/cplusplus.svg";
import css from "/public/svg/skills/css.svg";
import gcp from "/public/svg/skills/gcp.svg";
import git from "/public/svg/skills/git.svg";
import html from "/public/svg/skills/html.svg";
import java from "/public/svg/skills/java.svg";
import javascript from "/public/svg/skills/javascript.svg";
import mongoDB from "/public/svg/skills/mongoDB.svg";
import mysql from "/public/svg/skills/mysql.svg";
import nodeJS from "/public/svg/skills/nodeJS.svg";
import postgresql from "/public/svg/skills/postgresql.svg";
import python from "/public/svg/skills/python.svg";
import react from "/public/svg/skills/react.svg";
import typescript from "/public/svg/skills/typescript.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "node js":
      return nodeJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "java":
      return java;
    case "python":
      return python;
    case "git":
      return git;
    default:
      break;
  }
};
