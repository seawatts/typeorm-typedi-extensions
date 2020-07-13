export declare class Gulpfile {
    /**
     * Cleans build folder.
     */
    clean(cb: Function): any;
    /**
     * Runs typescript files compilation.
     */
    compile(): any;
    /**
     * Publishes a package to npm from ./build/package directory.
     */
    npmPublish(): any;
    /**
     * Copies all files that will be in a package.
     */
    packageFiles(): any;
    /**
     * Change the "private" state of the packaged package.json file to public.
     */
    packagePreparePackageFile(): any;
    /**
     * This task will replace all typescript code blocks in the README (since npm does not support typescript syntax
     * highlighting) and copy this README file into the package folder.
     */
    packageReadmeFile(): any;
    /**
     * This task will copy typings.json file to the build package.
     */
    copyTypingsFile(): any;
    /**
     * Creates a package that can be published to npm.
     */
    package(): (string | string[])[];
    /**
     * Creates a package and publishes it to npm.
     */
    publish(): string[];
    /**
     * Runs ts linting to validate source code.
     */
    tslint(): any;
    /**
     * Runs unit-tests.
     */
    unit(): any;
    /**
     * Compiles the code and runs tests.
     */
    tests(): string[];
}
