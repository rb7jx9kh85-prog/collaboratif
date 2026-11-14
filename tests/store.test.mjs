import test from 'node:test';
import assert from 'node:assert/strict';
import {seed,validate,progress,remove} from '../store.js';
test('seed and JSON backup round-trip preserve all features',()=>{const data=seed();assert.deepEqual(validate(JSON.parse(JSON.stringify(data))),data);});
test('project progress excludes subtasks and responds to custom status kind',()=>{const d=seed();d.tasks.push({...d.tasks[0],id:'sub',parent_id:'t1',status_id:'done'});assert.deepEqual(progress(d,'p1'),{total:3,done:1,pct:33});d.statuses.find(s=>s.id==='active').kind='done';assert.equal(progress(d,'p1').pct,67);});
test('deleting project keeps tasks and removes milestones and dangling post links',()=>{const d=seed();remove(d,'projects','p1');assert.equal(d.tasks.find(t=>t.id==='t1').project_id,'');assert.ok(!d.milestones.some(m=>m.project_id==='p1'));assert.equal(d.posts[0].link_id,'');});
test('deleting task recursively removes subtasks and comments',()=>{const d=seed();d.tasks.push({...d.tasks[0],id:'sub',parent_id:'t1'});d.comments.push({id:'comment',task_id:'sub'});remove(d,'tasks','t1');assert.ok(!d.tasks.some(t=>['sub','t1'].includes(t.id)));assert.equal(d.comments.length,0);});
test('import rejects malformed backup or active image URL',()=>{assert.throws(()=>validate({version:1}));const d=seed();d.posts[0].images=['javascript:alert(1)'];assert.throws(()=>validate(d));const e=seed();e.tasks[0].labels=null;assert.throws(()=>validate(e));});
