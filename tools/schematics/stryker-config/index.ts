import {
  chain,
  externalSchematic,
  Rule,
  apply,
  url,
  template,
  move
} from '@angular-devkit/schematics';
import {
  getProjectConfig,
  offsetFromRoot
} from '@nrwl/workspace';
import { mergeWith } from '@angular-devkit/schematics';

export interface StrykerProjectSchema {
  project: string;
  mutator: string;
  packageManager: string;
  testRunner: string;
  coverageAnalysis: boolean;
  tsconfigFile: string;
  reporters: string[];
}

function generateFiles(options: StrykerProjectSchema): Rule {
  return (host, context) => {
    const projectConfig = getProjectConfig(host, options.project);
    return mergeWith(
      apply(url('./files'), [
        template({
          tmpl: '',
          ...options,
          jestPath: `./${projectConfig.root}/jest.config.js`,
          files: [
            `./libs/**/*.ts`,
            `./libs/**/*.html`,
            `./${projectConfig.root}/src/**/*.ts`,
            `./${projectConfig.root}/src/**/*.html`,
            `./${projectConfig.root}/src/**/*.scss`,
            `./${projectConfig.root}/**/*.json`,
            `./${projectConfig.root}/jest.config.js`,
            `./${projectConfig.root}/tsconfig.json`,
            `./${projectConfig.root}/package.json`,
          ],
          mutate: [
            `./${projectConfig.root}/src/**/*.ts`,
            `!./${projectConfig.root}/src/**/*.spec.ts`,
          ],
          offsetFromRoot: offsetFromRoot(projectConfig.root)
        }),

        move(projectConfig.root),
      ])
    )(host, context);
    
  };
}

export default function(options: StrykerProjectSchema): Rule {
  return chain([generateFiles(options)]);
}
