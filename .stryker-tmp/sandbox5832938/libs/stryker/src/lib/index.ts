import { SchemaObject as TimestampBuilderSchema } from './schema';
import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { Observable, bindNodeCallback } from 'rxjs';
import { json, getSystemPath, normalize } from '@angular-devkit/core';
import { writeFile } from 'fs';
import { map, tap, catchError, } from 'rxjs/operators';
import * as dateFormat from 'dateformat';
import { of } from 'rxjs';

export function createTimestamp(
    { path, format }: TimestampBuilderSchema,
    { workspaceRoot, logger }: BuilderContext,
): Observable<BuilderOutput> {
    const timestampFileName = `${getSystemPath(normalize(workspaceRoot))}/${path}`;
    const writeFileObservable = bindNodeCallback(writeFile);
    const timestampLogger = logger.createChild('Timestamp');
    return writeFileObservable(timestampFileName, dateFormat(new Date(), format)).pipe(
        map(() => ({ success: true })),
        tap(() => timestampLogger.info("Timestamp created")),
        catchError(e => {
            timestampLogger.error("Failed to create timestamp", e);
            return of({ success: false });
        })
    );

}

export default createBuilder<json.JsonObject & TimestampBuilderSchema>(createTimestamp);