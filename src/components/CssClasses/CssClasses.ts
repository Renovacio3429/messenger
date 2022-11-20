import Handlebars from "handlebars";
import template from "./CssClasses.tmpl";

export function setCssClasses(props: { classes: Array<string> }): string {
    return Handlebars.compile(template)(props);
}
