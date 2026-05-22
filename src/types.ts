/**
 * Minimal structural types for Rapier interop.
 * Avoids version conflicts between @dimforge/rapier3d-compat versions
 * (e.g. the one bundled by @react-three/rapier vs. a direct install).
 */

/** A Rapier collider handle — opaque to this library. */
export interface RapierCollider {
  handle: number;
}

/** A Rapier collider descriptor returned by ColliderDesc.trimesh(). */
export interface RapierColliderDesc {
  friction: number;
  restitution: number;
}

/** A Rapier rigid body handle — opaque to this library. */
export interface RapierRigidBody {
  handle: number;
}

export interface RapierRigidBodyDesc {
  fixed(): RapierRigidBodyDesc;
}

/** Minimal Rapier world interface — only the methods we use. */
export interface RapierWorld {
  createCollider(desc: RapierColliderDesc, parent?: RapierRigidBody | null): RapierCollider;
  removeCollider(collider: RapierCollider, wakeUp: boolean): void;
  createRigidBody(desc?: RapierRigidBodyDesc): RapierRigidBody;
  removeRigidBody(body: RapierRigidBody, wakeUp: boolean): void;
}

/** Minimal Rapier module interface — only the statics we use. */
export interface RapierModule {
  RigidBodyDesc: {
    fixed(): RapierRigidBodyDesc;
  };
  ColliderDesc: {
    trimesh(
      vertices: Float32Array,
      indices: Uint32Array,
    ): RapierColliderDesc | null;
  };
}